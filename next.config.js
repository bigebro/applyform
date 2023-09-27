/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    typescript: {
        // set moduleResolution to node
        // this will override the value in tsconfig.json
        // if it's set there
        module: 'node'
    }
}