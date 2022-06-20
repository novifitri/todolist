# Belajar React.js dan TailwindCSS

Project sederhana membuat todolist dengan belajar menggunakan React.js untuk sisi SPA dan desain tampilan dengan tailwindcss. Memang sesungguhnya program sederhana ini bisa dibuat dengan menggunakan vanilla js namun saya hanya ingin memperdalam materi tentang library react dan juga framework css selain bootstrap. Untuk itu segala kritik dan saran sangat saya harapkan untuk membantu perkembangan saya.

### Berikut langkah - langkah nya

1. Buat project react <br>
npx create-react-app nama-app <br><em>kemudian cd ke project nya</em>

2. Menjalankan project react <br>
**npm start**

3. Pasang tailwindcss ke react project <br>
**npm install -D tailwindcss postcss autoprefixer**

4. Generate file tailwindcss confignya <br>
**npx tailwindcss init -p**

5. Buka tailwindcss.config.js kemudian copas :  <br>
module.exports = { <br>
  content: [ <br></br>
    "./src/**/*.{js,jsx,ts,tsx}", <br>
  ], <br>
  theme: { <br>
    extend: {}, <br>
  },<br>
  plugins: [],<br>
}<br>

6. kemudian buat file index.css dan taruh di folder src *(sesungguhnya bebas dimana saja namun biar rapi biasanya taruh disini) setelah di dalam file index.css copas Berikut : <br>
@tailwind base; <br>
@tailwind components; <br>
@tailwind utilities; <br>

7. kemudian build : **npm run start**

8. selanjutnya utility classes tailwind sudah bisa digunakan di jsx

<br>
Referensi

link docu react : <a href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank">React Create App</a>

link docu tailwindcss : <a href="https://tailwindcss.com/docs/guides/create-react-app" target="_blank">TailwindCSS in React</a>
