interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface Student {
    firstName: string;
    lastName: string;
}

const printTeacher = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`;
};

class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: Student) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}