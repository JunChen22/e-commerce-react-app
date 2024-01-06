## e-commerece-react-app
[![Java CI with Maven](https://github.com/JunChen22/e-commerce-microservice/actions/workflows/maven.yml/badge.svg)](https://github.com/JunChen22/e-commerce-microservice/actions/workflows/maven.yml) <a href="https://github.com/JunChen22/e-commerce-microservice"><img src="https://img.shields.io/badge/Backend-Spring-green"></a> <a href="https://github.com/JunChen22/e-commerce"><img src="https://img.shields.io/badge/Mononith-version-green"></a> <a href="TBD"><img src="https://img.shields.io/badge/Demo-running-green"></a>


this is the front end for e-commerce-microservice and e-commerce.
Using react js and next js framework.

``` lua
E-commerce-react 
├── public  	-- public asset   
├── src
    ├── component   
    ├── interfaces   
    ├── pages   
    ├── style   
    └── util

``` 

layout.tsx - ensure every page is the same.
globals.css - pre-written by Shadcn-UI


### Tech stack
| Tech                                                                                   | role                                  | version | How is it being used here                               |
|----------------------------------------------------------------------------------------|---------------------------------------|---------|---------------------------------------------------------|
| [React.js](https://react.dev/)                                                         |                                       |         |                                                         |
| [Next.js](https://nextjs.org/)                                                         |                                       |         |                                                         |
| [Shadcn-UI](https://ui.shadcn.com/)                                                    |                                       |         | UI                                                      |
| [Lucide](https://lucide.dev)                                                           |                                       |         | Icons                                                   |
| []()                                                                                   |                                       |         |                                                         |
| []()                                                                                   |                                       |         |                                                         |
|----------------------------------------------------------------------------------------|---------------------------------------|---------|---------------------------------------------------------|





to start

$ npm install		// download and update dependencies

$ npm run dev









# start note
https://nextjs.org/learn/react-foundations

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
$ npx shadcn-ui@latest add button


# add lucide-react, the icon
$ npx add lucide-react



