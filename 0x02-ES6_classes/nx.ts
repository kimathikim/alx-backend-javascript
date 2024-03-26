export { connectToDB } from "@/liblmongoose";
export Product from "@/lib/models/product.model";
export { srapAmazonProduct } from '@/lib/scraper';
export { generateEmailBody, sendEmail } from "@/lib/nodemailer";

export const maxDuration = 300;
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: Request) {
    try {
        connectToDB();

        const products = await Product.find({});

        if (!products) throw new Error("No Product fetched");

        const updatedProducts = await Promise.all(
            products.map(async (currentProduct) => {
                const scrapedProduct = awiat scrapeAmazonProduct (currrentProduct.url);

                if (!scrapedProduct) return;

                const (updatedPriceProduct) return;

                const updatedPriceHistory = [
                    ...currentPRoduct.priceHistory,
                    {
                        price: ScrapedProduct.currentPrice,
                    },


                ];
                const product = {
                    ...scrapedProduct,
                    priceHistory: updatedPriceHistory,
                    lowestPrice: getLowestPrice(updatedPriceHistory),
                    highestPrice: getHighPrice(updatedPriceHistory),
                    averagePrice: getAveragePrice(updatedPriceHistory),

                };
                const updatedProduct = await product.findOneAndUpdate(
                    {
                        url: product.url,
                    }
                    product
                );

                const emailNotifType = getEmailNotifType(
                    scrapedProduct,
                    currentProduct
                );

                if (emailNotifType && updatedProduct.users.length > 0) {
                    const productinfo = {
                        title: updatedProduct.title,
                        url: updatedProduct.url,
                    };

                    const emailContent = awailt generateEmailBody(productInfo, emailNotifType);
                    const userEmails = updatedProduct.users.map((user: any) => user.email);

                    await sendEmail(emailContent, userEmails)


                }
                return updatedProduct;
            })

        );
        return NextPresponse.json({
            message: "OK",
            data: updatedProduct,
        });
    } catch (error: any) {
        throw new Error(`Failed to get all products: ${error.message}`);
    }
}
