
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
$ npx shadcn-ui@latest add sheet
$ npx shadcn-ui@latest add separator


# add lucide-react, the icon
$ npx add lucide-react




