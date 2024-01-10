## e-commerece-react-app
[![Java CI with Maven](https://github.com/JunChen22/e-commerce-microservice/actions/workflows/maven.yml/badge.svg)](https://github.com/JunChen22/e-commerce-microservice/actions/workflows/maven.yml) <a href="https://github.com/JunChen22/e-commerce-microservice"><img src="https://img.shields.io/badge/Backend-Spring-green"></a> <a href="https://github.com/JunChen22/e-commerce"><img src="https://img.shields.io/badge/Mononith-version-green"></a> <a href="TBD"><img src="https://img.shields.io/badge/Demo-running-green"></a>


this is the front end for e-commerce-microservice and e-commerce.
Using react js and next js framework.

``` lua
E-commerce-react 
├── public  	    -- public asset   
└── src
    ├── app
    ├── component   
    |   └── UI      -- pre-build components by Shadcn-UI   
    ├── config   
    ├── hooks       -- custom hooks that are not by react 16.8   
    ├── interfaces  -- pre-defined interfaces 
    └── lib         -- common library

``` 

layout.tsx - ensure every page is the same.
globals.css - pre-written by Shadcn-UI
Next js 13 to 14 change routing from pages/index.tsx to src/app/page.tsx
https://nextjs.org/docs/app/building-your-application/routing

### Tech stack
| Tech                                                                                   | role                                  | version | How is it being used here                               |
|----------------------------------------------------------------------------------------|---------------------------------------|---------|---------------------------------------------------------|
| [React.js](https://react.dev/)                                                         | JavaScript library                    | 18.0.0  |                                                         |
| [Next.js](https://nextjs.org/)                                                         | React js framework                    | 14.0.0  |                                                         |
| [TypeScript](https://www.typescriptlang.org/)                                          | Typed Code                            | 5.0.0   |                                                         |
| [Node.js](https://nodejs.org/en/download)                                              | Package Management                    | 20.10.0 | Download dependencies and start project                 |
| [Shadcn-UI](https://ui.shadcn.com/)                                                    |                                       |         | UI                                                      |
| [Lucide](https://lucide.dev)                                                           | Icons                                 | 0.303.0 | Icons                                                   |
| []()                                                                                   |                                       |         |                                                         |


to start
```
$ export PATH=/usr/local/node/bin:$PATH
$ npm install		// download and update dependencies
$ npm run dev
```
