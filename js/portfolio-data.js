// Portfolio Data
const portfolioData = {
    personal: {
        name: "Alex Johnson",
        title: "Full Stack Developer & Problem Solver",
        email: "alex.johnson@email.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA"
    },

    about: {
        description: "🧑‍💻 I'm a Computer Science undergraduate at AIUB, passionate about Web Development, Artificial Intelligence, and Data Science. Also I'm a passionate full-stack developer with over 1 years of experience creating digital solutions that make a difference. I specialize in modern web technologies and have a deep love for clean, efficient code. I enjoy building software solutions that address real-world problems and enhance productivity.",
        highlights: [
            {
                icon: "💻",
                title: "1+ Years Experience",
                description: "Building scalable web applications and APIs"
            },
            {
                icon: "🚀",
                title: "50+ Projects",
                description: "Successfully delivered across various industries"
            },
            {
                icon: "🎯",
                title: "Problem Solver",
                description: "Turning complex challenges into elegant solutions"
            }
        ]
    },

    skills: [
        {
            category: "Frontend",
            items: [
                { name: "React", level: 95 },
                { name: "TypeScript", level: 90 },
                { name: "Next.js", level: 88 },
                { name: "Tailwind CSS", level: 92 },
                { name: "JavaScript", level: 94 }
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Node.js", level: 90 },
                { name: "Python", level: 85 },
                { name: "PostgreSQL", level: 88 },
                { name: "MongoDB", level: 82 },
                { name: "REST APIs", level: 93 }
            ]
        },
        {
            category: "Tools & Technologies",
            items: [
                { name: "Git", level: 92 },
                { name: "Docker", level: 85 },
                { name: "AWS", level: 80 },
                { name: "Figma", level: 78 },
                { name: "Jest", level: 88 }
            ]
        }
    ],

    education: [
        {
            degree: "Bachelor of Computer Science and Engineering",
            institution: "American International University-Bangladesh (AIUB)",
            year: "2022 to Present",
            description: "Comprehensive study of software development principles, algorithms, and system design. Active member of the Computer Science Society.",
            gpa: "3.82/4.00"
        },

        {
            degree: "Higher Secondary Certificate (HSC)",
            institution: "Feni Government College",
            year: "2018-2020",
            description: "Specialized in Machine Learning and Distributed Systems. Thesis on 'Optimizing Real-time Data Processing in Microservices Architecture'.",
            gpa: "5.00/5.00"
        }
    ],

    publications: [
        {
            title: "Efficient Microservices Communication Patterns in Distributed Systems",
            journal: "IEEE Transactions on Software Engineering",
            year: "2023",
            abstract: "This paper presents novel communication patterns for microservices that reduce latency by 40% while maintaining system reliability.",
            link: "#",
            citations: 45
        },
        {
            title: "Machine Learning Approaches to Code Quality Assessment",
            journal: "ACM Computing Surveys",
            year: "2022",
            abstract: "A comprehensive review of ML techniques for automated code quality assessment, including a new hybrid approach.",
            link: "#",
            citations: 67
        },
        {
            title: "Real-time Data Processing Optimization in Cloud Environments",
            journal: "Journal of Cloud Computing",
            year: "2021",
            abstract: "Novel optimization strategies for real-time data processing that improve throughput by 60% in cloud environments.",
            link: "#",
            citations: 34
        }
    ],

    projects: [
        {
            title: "EcoTracker",
            description: "A comprehensive environmental impact tracking application that helps users monitor their carbon footprint with real-time analytics.",
            technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
            category: "web",
            icon: "🌱",
            demo: "#",
            github: "#"
        },
        {
            title: "TaskFlow API",
            description: "High-performance REST API for task management with advanced filtering, real-time updates, and team collaboration features.",
            technologies: ["Node.js", "Express", "MongoDB", "Socket.io"],
            category: "api",
            icon: "⚡",
            demo: "#",
            github: "#"
        },
        {
            title: "MindfulMoments",
            description: "Mobile meditation app with guided sessions, progress tracking, and personalized recommendations using machine learning.",
            technologies: ["React Native", "Firebase", "TensorFlow", "Redux"],
            category: "mobile",
            icon: "🧘",
            demo: "#",
            github: "#"
        },
        {
            title: "DataViz Dashboard",
            description: "Interactive business intelligence dashboard with real-time data visualization and advanced analytics capabilities.",
            technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
            category: "web",
            icon: "📊",
            demo: "#",
            github: "#"
        },
        {
            title: "SmartHome Hub",
            description: "IoT control center for managing smart home devices with voice control and automation scheduling.",
            technologies: ["React", "Node.js", "MQTT", "Raspberry Pi"],
            category: "web",
            icon: "🏠",
            demo: "#",
            github: "#"
        },
        {
            title: "WeatherBot API",
            description: "Intelligent weather API that provides hyper-local forecasts using machine learning and multiple data sources.",
            technologies: ["Python", "FastAPI", "TensorFlow", "Redis"],
            category: "api",
            icon: "🌤️",
            demo: "#",
            github: "#"
        }
    ]
};