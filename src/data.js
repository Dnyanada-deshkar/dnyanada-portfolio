export const P = {
  name: 'Dnyanada Deshkar', email: 'dnyanadadeshkar@gmail.com', phone: '+91 9322335073',
  location: 'Nagpur, Maharashtra, India', city: 'Nagpur, India',
  linkedin: 'https://www.linkedin.com/in/dnyanada-deshkar/', github: 'https://github.com/Dnyanada-deshkar',
}
export const nav = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact']
export const jobs = [
  { role: '.NET Developer', co: 'Ally Solutions', when: 'June 2026 – Present', where: 'Nagpur, India',
    tech: ['C#', 'ASP.NET', 'SQL Server', 'ADO.NET', 'REST APIs'],
    stats: [['10+', 'ASP.NET modules'], ['15+', 'stored procedures'], ['20+', 'SQL queries optimized'], ['80%', 'less manual effort']],
    pts: ['Developed 10+ ASP.NET modules using C#, SQL Server, ADO.NET and REST APIs across 5+ business modules.',
      'Implemented 15+ stored procedures, CRUD operations, validations and reporting workflows.',
      'Optimized 20+ SQL queries and application workflows; built 5+ master modules and multi-stage approval workflows.',
      'Helped reduce manual effort by 80% and improve data accuracy.'] },
  { role: 'Junior Java Developer', co: 'NRSolution4u', when: 'January 2026 – June 2026', where: 'Nagpur, India',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Postman', 'React.js integration'],
    stats: [['20+', 'REST APIs built'], ['20+', 'endpoints tested']],
    pts: ['Developed 20+ REST APIs using Java, Spring Boot and Spring Security across authentication, approval and CRUD workflows.',
      'Tested and debugged 20+ API endpoints with Postman, resolving defects and improving reliability for React.js integration.'] },
]
// shots: list image paths, e.g. ['/projects/digibag/1.png']. github / demo: add URLs when ready (buttons appear automatically).
export const projects = [
  { slug: 'digibag', title: 'DigiBag', sub: 'Digital School Bag', github: '', demo: '', shots: [],
    stack: ['Java', 'Spring Boot', 'REST APIs', 'Spring Security', 'React.js', 'SQL'],
    about: 'A school management platform supporting three user roles.',
    pts: ['Built 10+ REST APIs with Spring Boot.', 'Developed functionality across 5+ modules.', 'Centralized exception handling with @ControllerAdvice.', 'Validated 15+ REST endpoints in Postman.', 'Worked in a 3-member Git-based Agile team.'] },
  { slug: 'sales-target-report', title: 'Sales Target Report', sub: 'Management System', github: '', demo: '', shots: [],
    stack: ['ASP.NET Web Forms', 'C#', 'SQL Server', 'Stored Procedures'],
    about: 'Manages business partners, monthly sales targets and daily sales records.',
    pts: ['Managed 100+ business partners and 1,000+ daily sales records.', 'Built 5 integrated modules.', 'Developed 15+ SQL stored procedures.', 'Added CRUD, pagination, validation, dashboard analytics and automated target balance calculations.', 'Reduced manual effort by 80%.'] },
  { slug: 'cht-management', title: 'CHT Management System', sub: 'Digitizing Civil Transport Operations', github: '', demo: '', shots: [],
    stack: ['ASP.NET Core Web API', '.NET 8', 'C#', 'EF Core', 'SQL Server', 'HTML', 'CSS', 'JavaScript', 'JWT'],
    about: 'Transformed a paper-driven transport management process into a centralized web application, connecting 5 master modules, 57 contract-rate records and a 6-stage operational workflow.',
    pts: ['Centralized indent registration and sequential Clerk/CIO approvals.', 'Enabled vendor allocation and individual vehicle/driver tracking.', 'Digitized 2 operational registers and transport utilization records.', 'Added vehicle-photo and document uploads with printable transport forms.'] },
  { slug: 'stationery-inventory', title: 'Stationery Inventory Management System', sub: 'Web API migration', github: '', demo: '', shots: [],
    stack: ['C#', 'ASP.NET MVC 5', 'ASP.NET Web API 2', 'SQL Server', 'ADO.NET', 'jQuery', 'Bootstrap', 'iTextSharp'],
    about: 'Migrated 4 inventory modules to RESTful Web APIs while preserving the existing UI.',
    pts: ['Developed 30 API actions and integrated 24 SQL Server stored procedures using ADO.NET.', 'Automated multi-item purchase calculations and added inventory KPIs, low-stock alerts, image uploads and PDF reports.'] },
  { slug: 'insurance-management', title: 'Insurance Management System', sub: 'Database-led project', github: '', demo: '', shots: [],
    stack: ['Oracle SQL', 'Database Design', 'Application Development'],
    about: 'An insurance management project covering database design, structured data management and application workflows.',
    pts: ['Worked on normalized database design.', 'Optimized SQL queries.', 'End-to-end application development.'] },
  { slug: 'booktrack', title: 'BookTrack', sub: 'Library Management System · Academic project', github: '', demo: '', shots: [],
    stack: ['Relational Database Design', 'CRUD Operations', 'Database Management'], // TODO: replace with the actual technologies you used
    about: 'A library management system with 4 core modules (Book Management, Member Management, Book Issue and Return) built to centralize library operations and reduce manual record handling.',
    pts: ['Implemented 20+ CRUD operations across book and member records using structured database queries.', 'Designed 5+ relational tables for book inventory, member information and circulation records.', 'Implemented book availability and issue-return tracking across 3 key workflows.'] },
  { slug: 'portfolio', title: 'Developer Portfolio', sub: 'This website · React and UI design', github: '', demo: '', shots: [],
    stack: ['React.js', 'Vite', 'JavaScript', 'HTML', 'CSS'],
    about: 'My personal portfolio, designed and built from scratch as a responsive single-page React app.',
    pts: ['Built with reusable React components and a single data file that drives every section.', 'Designed the visual system: warm plum, cream and mustard palette, editorial typography and layout grid.', 'Added interactive pieces: project screenshot carousel, skill category filters, scroll progress and a validated contact form.', 'Made it responsive and accessible, with semantic HTML, keyboard navigation and reduced-motion support.'] },
]
export const skills = {
  'Programming Languages': ['Java', 'C#', 'SQL', 'JavaScript'],
  'Backend & Frameworks': ['Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate', 'JPA', 'ASP.NET MVC', 'ASP.NET Web API', 'ASP.NET Web Forms', 'ASP.NET Core Web API', 'Entity Framework Core', 'JWT Authentication'],
  'Databases': ['Oracle Database', 'SQL Server', 'MySQL', 'PostgreSQL'],
  'Frontend': ['React.js', 'JavaScript', 'HTML', 'CSS', 'jQuery', 'Bootstrap'],
  'Core Computer Science': ['Object-Oriented Programming', 'Collections Framework', 'String Handling and Mutability', 'Exception Handling', 'Concurrency and Multithreading'],
  'Developer Tools': ['Git', 'GitHub', 'Maven', 'Postman', 'Visual Studio', 'Eclipse'],
}
export const edu = { deg: 'B.Tech in Computer Science', school: 'RTMNU, Nagpur', when: '2022–2026', extra: 'CGPA 7.8' }
export const certs = ['Deloitte Technology Job Simulation — Forage', 'Full Stack Java Development — Unisoft Technologies']