## Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

# Portal Berita

Proyek ini adalah aplikasi portal berita yang dibangun menggunakan Laravel untuk backend dan React untuk frontend. Tujuan dari proyek ini adalah untuk menyediakan platform berita yang interaktif dan mudah digunakan, di mana pengguna dapat membaca, mencari, dan berinteraksi dengan berbagai berita yang tersedia.

## Instalasi
#### ikuti langkah-langkah ini dengan urut
1. npm install
2. composer install
3. cp .env.example .env (run diterminal)-> setelah dirun akan muncul file .env
   - buka file .env dan sesuaikan dengan database temen-temen, contohnya seperti gambar dibawah
   -  ![image](https://github.com/user-attachments/assets/60525c94-c41e-4ded-88dc-71472007cd11)
4. setelah itu import database yang ada di file import_database
   - ![image](https://github.com/user-attachments/assets/06060adf-38f6-4b88-a7fc-33e1a721c056)
5. setelah itu jalankan perintah -> php artisan key:generate
6. kemudian lanjut jalankan perintah -> php artisan migrate
7. dan terakhir jalankan perintah --> php artisan storage:link

## Run App
### untuk menjalankan project ini jalankan kedua perintah ini.
1. npm run dev
2. php artisan serve

### Admin
#### untuk bisa edit berita login dengan menggunakan username ini
1. username : admin@gmail.com
2. password : 12345678

jangan lupa sesuaikan db_user dan db_password🙂
