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

$ npm install		// download and update dependencies
$ npm run dev



# install next framework
# using Next version 14.0.4
npx create-next-app@latest    

# need node 18.17.0 or later version

npm install -g n
sudo npm install -g n

# remove existing npm and node files for clean install.
sudo rm -rf /usr/local/{bin/node,lib/node_modules,n,man/doc/node*,*local*}
sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node* /usr/local/lib/dtrace/node.d

# install
tar -xJf node-v20.10.0-linux-x64.tar.xz
mv node-v20.10.0-linux-x64 /usr/local/node
export PATH=/usr/local/node/bin:$PATH

node --version
npm --version
npm show next version


npx create-next-app E-commerce-react-app -e with-typescript


npm install
npm run dev
npm run build


# clean up 

npm prune

rm -rf node_modules


AWS
next js with typescript
spring boot
leet code
read the byte book


might add a total or incart boolean in cart item table

emmet balance outward
control + m


co pilot is control + i 

to clear out hte unnecessary dependency is 
shit + alt + o

auto format
Shift + Alt + F

shift + control + p   => reload window
to solve import error

# Command used
# create project
$ npx create-next-app@14.0.0 e-commerece-react-app

# add shadcn-ui and it's components
$ npx shadcn-ui@latest init


# add lucide-react, the icon
$ npx add lucide-react


```
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add accordion
npx shadcn-ui@latest add alert
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add hover-card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add menubar
npx shadcn-ui@latest add pagination
npx shadcn-ui@latest add popover
npx shadcn-ui@latest add progress
npx shadcn-ui@latest add radio-group
npx shadcn-ui@latest add scroll-area
npx shadcn-ui@latest add select
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add sheet
npx shadcn-ui@latest add skeleton
npx shadcn-ui@latest add sonner
npx shadcn-ui@latest add switch
npx shadcn-ui@latest add table
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add tooltip
npx shadcn-ui@latest add card
npx shadcn-ui@latest add carousel
npx shadcn-ui@latest add checkbox
npx shadcn-ui@latest add command
npx shadcn-ui@latest add context-menu
npx shadcn-ui@latest add alert-dialog	// also includes button
npx shadcn-ui@latest add button

// combination
combobox = Popover + Command   https://ui.shadcn.com/docs/components/combobox
data-table = Table	https://ui.shadcn.com/docs/components/data-table
date-picker = Popover + Calendar https://ui.shadcn.com/docs/components/date-picker
```

