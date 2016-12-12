angular.module('jobTracker.demoFactory', [])
.factory('DemoFactory', function () {
  var jane = { _id: '5849cb2bdb9e1c56154aeb2b',
    username: 'Jane',
    __v: 5,
    jobstatus: 1,
    jobList:
     [ { company: 'Facebook',
         jobTitle: 'Product Manager',
         location: 'Menlo Park, CA',
         jobLink: 'www.facebook.com/careers',
         contactPerson: 'Robert Williams',
         contactInfo: 'sara@facebook.com',
         age: '2016-12-25T08:00:00.000Z',
         description: 'Facebook Product Managers work with teams of engineers and designers to build products. We have an opportunity for a strong product leader to create the global strategy and execute on high priority security initiatives. This PM would lead Account Access - the team that focuses on authentication & authorization for the Facebook family of products. We want to make login and account recovery as simple and straightforward as possible, while providing state of the art security and tools for people to protect their accounts. If people cannot access our products, we can’t make the world more open and connected. If people don\'t feel that their account is safe, we can\'t make the world more open and connected. Our goal is to create the next generation of innovative products for authentication that help connect people who are experiencing the internet for the first time. This position is full time and based at our Menlo Park office.',
         notes: 'This job looks great!',
         id: 'B1EHqIvmg',
         _id: '5849da3bdb9e1c56154aeb2c',
         updatedAt: '2016-12-11T17:01:48.622Z',
         status: { progress: 6, rejected: false },
         interestLevel: 3 },
       { company: 'Google',
         jobTitle: 'Senior Software Engineer',
         location: 'Mountain View, CA',
         jobLink: 'https://www.google.com/about/careers/',
         contactPerson: 'Bartek Ringwelski',
         contactInfo: 'bartek@google.com',
         age: '2016-12-09T08:00:00.000Z',
         description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design, networking and data storage, security, artificial intelligence, natural language processing, UI design and mobile; the list goes on and is growing every day. As a software engineer, you will work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to tackle new problems across the full-stack as we continue to push technology forward.',
         notes: 'Outlook is good. Interview went well.',
         id: 'HJMhiUvmx',
         _id: '5849dba9db9e1c56154aeb2d',
         updatedAt: '2016-12-11T17:01:55.436Z',
         status: { progress: 4, rejected: false },
         interestLevel: 4 },
       { jobTitle: 'Software Engineer (Full Stack) - Revenue',
         description: 'We’re a full-stack team with expertise in mobile, web, and backend. We’re building out products to enable richer and more interactive content on Twitter for our users, advertisers, and developers. Our culture emphasizes creative problem solving, fast iteration and execution. \nOur technology stack is mainly based on Scala and Java on the backend and Javascript, CSS, HTML on the frontend. We have a wide range of opportunities for different skill levels and experiences. Twitter is a major contributor to over 70 open source projects, including Hadoop, Pig and others (many are hosted here - https://github.com/twitter)',
         notes: 'Im awesome.',
         company: 'Twitter',
         location: 'San Francisco, CA',
         jobLink: 'https://careers.twitter.com/en/work-for-twitter/software-engineer-full-stack-revenue.html',
         contactPerson: 'Roshni Champaneri',
         contactInfo: 'roshni@twitter.com',
         age: '2016-12-09T08:00:00.000Z',
         id: 'rJMa6IDmx',
         _id: '5849ddbadb9e1c56154aeb2e',
         updatedAt: '2016-12-11T17:01:42.049Z',
         status: { progress: 3, rejected: false },
         interestLevel: 5 },
       { company: 'William Sonoma',
         jobTitle: 'E-Commerce Senior Architect',
         location: 'San Francisco, CA',
         jobLink: 'http://careers.williams-sonomainc.com/williams-sonoma-inc/job/San-Francisco-E-Commerce-Senior-Architect-CA-94101/379358100/',
         contactPerson: 'Allen Price',
         contactInfo: 'allen@william.sonoma.com',
         age: '2016-12-09T08:00:00.000Z',
         description: 'Drive ecommerce projects with a small architecture team, the ecommerce development organization, and architects. Provide an architectural vision, deep analysis and problem solving, and a hands-on role in the application of technologies and processes from proof-of-concept and reference implementations through full production systems. Provide recommendations for new technologies and approaches in order to advance the capabilities and value of the company\'s ecommerce platform. Leverage exceptional technical design and analysis to effectively communicate across all levels of the Williams-Sonoma, Inc. organization. Provide expertise and leadership across multiple ecommerce space domains. Train the ecommerce department and other teams within the organization about the design of software and systems, development best practices, technical roadmaps, and new technologies. Leverage web technologies, including TCP/IP, HTTP, HTML, CSS, XML, SMTP, JavaScript and understanding of the full lifecycle of production systems, including deployment, operations, support, and transition/deprecation in order to deliver the highest-quality solutions.',
         notes: 'Short Commute.',
         id: 'Sk4x1Dv7l',
         _id: '5849deebdb9e1c56154aeb2f',
         updatedAt: '2016-12-11T17:02:09.075Z',
         status: { progress: 2, rejected: false },
         interestLevel: 2 },
       { company: 'Slack',
         jobTitle: 'Director of Core Product Engineering',
         location: 'San Francisco, CA',
         jobLink: 'https://slack.com/jobs/526874/director-of-core-product-engineering',
         contactPerson: 'Juliet Stein',
         contactInfo: 'juliet@slack.com',
         age: '2016-12-09T08:00:00.000Z',
         description: 'Slack is looking for an experienced director of engineering to lead the Core Product  engineering team in building new features to help our users send messages, share files, and make voice and video calls. This person will report to the Head of Product Engineering and will work alongside our engineering management team.',
         notes: 'Good benefits.',
         id: 'rJBGlPDXg',
         _id: '5849e00ddb9e1c56154aeb30',
         status: { progress: 4, rejected: false },
         interestLevel: 4
        }
      ]
    }

    return {
      jane: jane
    }
})

