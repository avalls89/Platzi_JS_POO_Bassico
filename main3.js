class Course {
    constructor({
        name,
        classes = [],
    }) {
        this.name = name;
        this.classes = classes;
    }
}

const cursoProgBasica = new Course({
    name: "Curso Basico de Programación Básica",
});
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
});
const cursoDataBusiness = new Course({
    name: "Curso DataBusiness",
});
const cursoDataViz = new Course({
    name: "Curso Dataviz",
});


class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracHTML,
    ],
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        cursoDataBusiness,
        cursoDataViz,
    ],
});



class Student {
    constructor({
        name,
        age,
        email,
        twitter = undefined,
        instagram,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.socialMedia = {
            twitter,
            instagram,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
};

const juandc = new Student({
    name: "JuanDC",
    username: "juandc",
    twitter: "fjuandc",
    learningPaths: [
        escuelaData,
        escuelaWeb,
    ],
});


const pepe = new Student({
    name: "Pepito",
    username: "pepea",
    twitter: "pepete14",
    learningPaths: [
        escuelaData,
        escuelaWeb,
    ],
});

