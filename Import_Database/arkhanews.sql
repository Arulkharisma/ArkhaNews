-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 27, 2024 at 02:58 PM
-- Server version: 8.0.30
-- PHP Version: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arkhanews`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('arul2@gmail.com|127.0.0.1', 'i:1;', 1724595498),
('arul2@gmail.com|127.0.0.1:timer', 'i:1724595498;', 1724595498);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(13, '0001_01_01_000000_create_users_table', 1),
(14, '0001_01_01_000001_create_cache_table', 1),
(15, '0001_01_01_000002_create_jobs_table', 1),
(16, '2024_07_06_141450_create_news_table', 1),
(17, '2024_08_25_001704_add_image_path_to_news_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `image_path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `description`, `category`, `author`, `created_at`, `updated_at`, `image_path`) VALUES
(37, 'Ekonomi: Pengertian, Ruang Lingkup, dan Peran dalam Kehidupan', '<strong>Ekonomi</strong> adalah salah satu disiplin ilmu yang sangat berpengaruh dalam kehidupan sehari-hari. Secara umum, ekonomi mempelajari bagaimana individu, perusahaan, dan negara mengalokasikan sumber daya yang terbatas untuk memenuhi kebutuhan dan keinginan mereka. Pada intinya, ekonomi berusaha untuk memahami bagaimana kita membuat pilihan tentang penggunaan barang dan jasa, serta bagaimana interaksi ini membentuk pasar dan kebijakan publik.<br /><br />\r\n\r\n    <strong>Pengertian Ekonomi</strong><br />\r\n    Kata \"ekonomi\" berasal dari bahasa Yunani <strong>\"oikonomia\"</strong>, yang berarti manajemen rumah tangga. Secara lebih luas, ekonomi dapat didefinisikan sebagai ilmu yang mempelajari perilaku manusia dalam usaha memenuhi kebutuhan hidupnya, yang tidak terbatas, dengan sumber daya yang terbatas. Ekonomi mencakup berbagai aspek seperti produksi, distribusi, dan konsumsi barang dan jasa.<br /><br />\r\n\r\n    <strong>Ruang Lingkup Ekonomi</strong><br />\r\n    Ekonomi terbagi ke dalam dua cabang utama:<br />\r\n    <strong>Mikroekonomi</strong>: Mikroekonomi berfokus pada perilaku individu dan perusahaan dalam pengambilan keputusan, seperti penentuan harga, produksi, dan konsumsi. Contohnya adalah bagaimana sebuah perusahaan menentukan harga produknya atau bagaimana konsumen memilih barang yang ingin dibeli berdasarkan preferensi dan pendapatan mereka.<br />\r\n    <strong>Makroekonomi</strong>: Makroekonomi, di sisi lain, mempelajari fenomena ekonomi dalam skala yang lebih besar, seperti inflasi, pengangguran, dan pertumbuhan ekonomi nasional. Ini mencakup analisis kebijakan pemerintah dalam mengendalikan perekonomian, seperti penentuan suku bunga dan anggaran negara.<br /><br />\r\n\r\n    <strong>Peran Ekonomi dalam Kehidupan</strong><br />\r\n    Ekonomi memegang peranan penting dalam hampir setiap aspek kehidupan manusia. Berikut beberapa peran utama ekonomi dalam kehidupan kita:<br />\r\n    <strong>Pengambilan Keputusan</strong>: Ekonomi membantu individu dan perusahaan untuk membuat keputusan yang tepat dalam hal penggunaan sumber daya. Dengan memahami prinsip-prinsip ekonomi, seseorang dapat lebih bijak dalam mengelola uang, memilih investasi, atau menentukan strategi bisnis.<br />\r\n    <strong>Pembangunan Ekonomi</strong>: Ekonomi sangat penting dalam pembangunan suatu negara. Pertumbuhan ekonomi yang sehat dapat meningkatkan standar hidup masyarakat, mengurangi kemiskinan, dan menciptakan lapangan pekerjaan. Pemerintah biasanya menggunakan indikator ekonomi seperti PDB (Produk Domestik Bruto) untuk mengukur kemajuan ekonomi suatu negara.<br />', 'Ekonomi', 'Chat GPT', '2024-08-24 19:11:03', '2024-08-26 23:26:09', 'news_images/FunCYGANR2qMdDzOT5Og0Jxe7G7HqXRucw707LnR.webp'),
(38, 'Kesehatan: Pengertian, Pentingnya, dan Cara Menjaga Tubuh Tetap Sehat', 'Kesehatan adalah kondisi di mana tubuh dan pikiran berfungsi secara optimal tanpa adanya penyakit atau gangguan. Kesehatan mencakup berbagai aspek, termasuk kesehatan fisik, mental, dan sosial. Menjaga kesehatan sangat penting untuk meningkatkan kualitas hidup dan memperpanjang usia harapan hidup.<br /><br />\r\n\r\n    <strong>Pentingnya Kesehatan</strong><br />\r\n    Kesehatan adalah salah satu aspek terpenting dalam kehidupan seseorang. Dengan memiliki tubuh yang sehat, seseorang dapat melakukan aktivitas sehari-hari dengan baik, memiliki energi yang cukup, dan terhindar dari berbagai penyakit. <br /><br />\r\n    <strong>Pentingnya menjaga kesehatan</strong> juga berkaitan erat dengan produktivitas dan kesejahteraan hidup. Tubuh yang sehat membuat pikiran lebih jernih dan membantu dalam pengambilan keputusan yang lebih baik.<br /><br />\r\n\r\n    <strong>Cara Menjaga Kesehatan Tubuh</strong><br />\r\n    Berikut adalah beberapa cara untuk menjaga tubuh tetap sehat:<br /><br />\r\n\r\n    <strong>1. Pola Makan Sehat</strong><br />\r\n    Mengonsumsi makanan bergizi seimbang yang mengandung karbohidrat, protein, lemak sehat, vitamin, dan mineral sangat penting untuk menjaga kesehatan. Hindari makanan olahan yang tinggi gula, garam, dan lemak jenuh.<br /><br />\r\n\r\n    <strong>2. Rutin Berolahraga</strong><br />\r\n    Aktivitas fisik yang teratur dapat meningkatkan kebugaran tubuh dan menjaga kesehatan jantung, otot, serta tulang. Berolahraga setidaknya 30 menit setiap hari dapat mengurangi risiko penyakit kronis seperti diabetes, hipertensi, dan penyakit jantung.<br /><br />\r\n\r\n    <strong>3. Cukup Istirahat</strong><br />\r\n    Tidur yang cukup dan berkualitas penting untuk menjaga kesehatan tubuh dan pikiran. Kurang tidur dapat menyebabkan masalah kesehatan seperti gangguan metabolisme, penurunan daya tahan tubuh, serta gangguan mental seperti stres dan depresi.<br /><br />\r\n\r\n    <strong>4. Mengelola Stres</strong><br />\r\n    Stres yang tidak terkontrol dapat memengaruhi kesehatan mental dan fisik. Lakukan aktivitas relaksasi seperti meditasi, yoga, atau hobi yang menyenangkan untuk mengurangi stres dan meningkatkan kesejahteraan mental.<br /><br />\r\n\r\n    <strong>5. Hindari Kebiasaan Buruk</strong><br />\r\n    Menghindari kebiasaan buruk seperti merokok, mengonsumsi alkohol berlebihan, dan penyalahgunaan obat sangat penting untuk menjaga kesehatan jangka panjang.<br /><br />\r\n\r\n    Dengan menjaga kesehatan melalui pola hidup sehat, tubuh akan tetap fit dan terhindar dari berbagai penyakit. Investasi dalam kesehatan adalah salah satu investasi terbaik yang dapat dilakukan untuk masa depan yang lebih baik.<br />', 'Kesehatan', 'Chat GPT', '2024-08-25 06:45:07', '2024-08-25 06:45:07', 'news_images/oYxdTw1TJEpWfJXVS13cj3rUFU4DAEvvoeU7rk8R.jpg'),
(54, 'Pentingnya Kesehatan Mental dan Fisik', 'Kesehatan bukan hanya tentang fisik, tetapi juga mencakup kesehatan mental. Kedua aspek ini saling berhubungan dan sama pentingnya untuk kesejahteraan keseluruhan seseorang.<br /><br />\r\n\r\n    <strong>Kesehatan Fisik</strong><br />\r\n    Kesehatan fisik mengacu pada kondisi tubuh yang bebas dari penyakit dan mampu berfungsi dengan baik. Menjaga kesehatan fisik melibatkan beberapa kebiasaan sehat:<br /><br />\r\n\r\n    <strong>1. Nutrisi yang Seimbang</strong><br />\r\n    Konsumsi makanan yang bergizi seperti buah-buahan, sayuran, biji-bijian, dan protein sehat sangat penting untuk tubuh. Hindari makanan yang mengandung banyak gula dan lemak trans.<br /><br />\r\n\r\n    <strong>2. Aktivitas Fisik Teratur</strong><br />\r\n    Olahraga secara rutin seperti berjalan kaki, berlari, atau berenang dapat meningkatkan kebugaran tubuh dan mencegah berbagai penyakit kronis. Usahakan untuk berolahraga minimal 150 menit per minggu.<br /><br />\r\n\r\n    <strong>3. Pemeriksaan Kesehatan Rutin</strong><br />\r\n    Melakukan pemeriksaan kesehatan secara berkala membantu mendeteksi masalah kesehatan sejak dini dan mencegah penyakit lebih lanjut.<br /><br />\r\n\r\n    <strong>Kesehatan Mental</strong><br />\r\n    Kesehatan mental penting untuk menjalani kehidupan sehari-hari dengan baik dan menikmati pengalaman hidup. Beberapa cara untuk menjaga kesehatan mental termasuk:<br /><br />\r\n\r\n    <strong>1. Mengelola Stres</strong><br />\r\n    Teknik manajemen stres seperti meditasi, pernapasan dalam, dan latihan mindfulness dapat membantu menjaga kesehatan mental.<br /><br />\r\n\r\n    <strong>2. Menjaga Hubungan Sosial</strong><br />\r\n    Berinteraksi dengan teman dan keluarga dapat memberikan dukungan emosional dan meningkatkan mood. Hubungan sosial yang baik membantu merasa lebih terhubung dan kurang terisolasi.<br /><br />\r\n\r\n    <strong>3. Tidur yang Cukup</strong><br />\r\n    Tidur yang berkualitas penting untuk kesehatan mental. Kurang tidur dapat memengaruhi mood, konsentrasi, dan kemampuan mengatasi stres.<br /><br />\r\n\r\n    <strong>4. Aktivitas yang Menyenangkan</strong><br />\r\n    Luangkan waktu untuk melakukan aktivitas yang Anda nikmati, seperti hobi atau kegiatan kreatif, untuk menjaga kesejahteraan mental.<br /><br />\r\n\r\n    Mengintegrasikan perawatan kesehatan fisik dan mental ke dalam rutinitas harian dapat membantu mencapai keseimbangan dan meningkatkan kualitas hidup secara keseluruhan.<br />', 'Kesehatan', 'Arul Kharisma', '2024-08-25 09:41:56', '2024-08-25 09:41:56', 'news_images/cow8ZZbsZl5ek5mqIc4nZC1qRLOVclJ9ai7hrKRB.jpg'),
(55, 'Manfaat Kesehatan dari Pola Hidup Sehat', 'Mengadopsi pola hidup sehat dapat membawa banyak manfaat bagi kesehatan tubuh dan pikiran. Pola hidup sehat melibatkan kombinasi dari kebiasaan makan yang baik, aktivitas fisik, dan perilaku sehat lainnya.<br /><br />\r\n\r\n    <strong>1. Menjaga Berat Badan Ideal</strong><br />\r\n    Dengan mengikuti pola makan yang seimbang dan rutin berolahraga, Anda dapat menjaga berat badan ideal. Berat badan yang sehat mengurangi risiko terkena berbagai penyakit seperti diabetes, hipertensi, dan penyakit jantung.<br /><br />\r\n\r\n    <strong>2. Meningkatkan Sistem Kekebalan Tubuh</strong><br />\r\n    Nutrisi yang baik dan aktivitas fisik yang teratur membantu memperkuat sistem kekebalan tubuh. Ini membuat tubuh lebih mampu melawan infeksi dan penyakit.<br /><br />\r\n\r\n    <strong>3. Meningkatkan Kualitas Tidur</strong><br />\r\n    Pola hidup sehat yang meliputi rutinitas tidur yang konsisten dan lingkungan tidur yang nyaman dapat meningkatkan kualitas tidur. Tidur yang berkualitas penting untuk pemulihan fisik dan kesehatan mental.<br /><br />\r\n\r\n    <strong>4. Meningkatkan Energi dan Vitalitas</strong><br />\r\n    Makanan bergizi dan olahraga secara teratur dapat meningkatkan tingkat energi dan vitalitas. Ini membantu Anda merasa lebih aktif dan produktif sepanjang hari.<br /><br />\r\n\r\n    <strong>5. Menurunkan Risiko Penyakit Kronis</strong><br />\r\n    Dengan menjaga pola makan yang sehat, berolahraga secara rutin, dan menghindari kebiasaan buruk, Anda dapat menurunkan risiko terkena penyakit kronis seperti kanker, stroke, dan penyakit jantung.<br /><br />\r\n\r\n    <strong>6. Meningkatkan Kesejahteraan Mental</strong><br />\r\n    Pola hidup sehat tidak hanya bermanfaat bagi tubuh, tetapi juga bagi kesehatan mental. Aktivitas fisik yang rutin dapat mengurangi gejala kecemasan dan depresi, sementara diet yang sehat dapat meningkatkan mood dan fungsi kognitif.<br /><br />\r\n\r\n    Mengadopsi pola hidup sehat adalah langkah penting untuk meningkatkan kualitas hidup dan kesejahteraan secara keseluruhan. Dengan komitmen untuk menjaga kesehatan tubuh dan pikiran, Anda dapat menikmati hidup yang lebih sehat dan lebih bahagia.<br />', 'Kesehatan', 'Arul', '2024-08-25 09:44:37', '2024-08-25 09:44:37', 'news_images/PvmK176m5hgkSZvA9tss4EBbOkVEbvH8aWvwVIKx.jpg'),
(56, 'Pentingnya Hidrasi untuk Kesehatan Tubuh', 'Hidrasi adalah aspek penting dari kesehatan tubuh yang sering kali terabaikan. Tubuh manusia terdiri dari sekitar 60% air, dan menjaga keseimbangan cairan dalam tubuh sangat penting untuk berbagai fungsi fisiologis.<br /><br />\r\n\r\n    <strong>Manfaat Hidrasi yang Cukup</strong><br />\r\n    Menjaga hidrasi yang baik memiliki berbagai manfaat kesehatan, antara lain:<br /><br />\r\n\r\n    <strong>1. Meningkatkan Fungsi Tubuh</strong><br />\r\n    Air membantu dalam proses pencernaan, penyerapan nutrisi, dan pengaturan suhu tubuh. Hidrasi yang cukup mendukung fungsi organ tubuh dan menjaga keseimbangan elektrolit.<br /><br />\r\n\r\n    <strong>2. Meningkatkan Kinerja Kognitif</strong><br />\r\n    Kekurangan cairan dapat memengaruhi konsentrasi, memori, dan suasana hati. Minum air yang cukup membantu menjaga fungsi otak yang optimal dan meningkatkan fokus serta kejernihan berpikir.<br /><br />\r\n\r\n    <strong>3. Mencegah Dehidrasi</strong><br />\r\n    Dehidrasi dapat menyebabkan kelelahan, sakit kepala, dan gangguan kesehatan lainnya. Menjaga asupan cairan yang cukup membantu mencegah dehidrasi dan memastikan tubuh berfungsi dengan baik.<br /><br />\r\n\r\n    <strong>4. Mendukung Kesehatan Kulit</strong><br />\r\n    Hidrasi yang baik dapat membantu menjaga kelembapan kulit dan mencegah kerutan. Air membantu mengeluarkan racun dari tubuh dan membuat kulit tampak lebih segar dan bercahaya.<br /><br />\r\n\r\n    <strong>5. Meningkatkan Performansi Olahraga</strong><br />\r\n    Selama aktivitas fisik, tubuh kehilangan cairan melalui keringat. Minum air yang cukup sebelum, selama, dan setelah berolahraga membantu mencegah kelelahan dan meningkatkan performa.<br /><br />\r\n\r\n    <strong>Cara Memastikan Hidrasi yang Cukup</strong><br />\r\n    Untuk memastikan tubuh Anda terhidrasi dengan baik, pertimbangkan tips berikut:<br /><br />\r\n\r\n    <strong>1. Minum Air Secara Teratur</strong><br />\r\n    Usahakan untuk minum air sepanjang hari, bukan hanya ketika merasa haus. Cobalah untuk mengonsumsi sekitar 8 gelas air per hari, atau lebih jika Anda beraktivitas fisik atau berada di lingkungan yang panas.<br /><br />\r\n\r\n    <strong>2. Konsumsi Makanan yang Mengandung Air</strong><br />\r\n    Selain air, makanan seperti buah-buahan dan sayuran juga mengandung banyak air. Mengonsumsi makanan ini dapat membantu memenuhi kebutuhan cairan tubuh.<br /><br />\r\n\r\n    <strong>3. Perhatikan Tanda-Tanda Dehidrasi</strong><br />\r\n    Perhatikan tanda-tanda dehidrasi seperti urin yang gelap, mulut kering, dan rasa lelah. Jika mengalami gejala-gejala ini, pastikan untuk meningkatkan asupan cairan.<br /><br />\r\n\r\n    Hidrasi yang tepat adalah kunci untuk menjaga kesehatan tubuh secara keseluruhan. Dengan memperhatikan kebutuhan cairan tubuh dan menerapkan kebiasaan hidrasi yang baik, Anda dapat mendukung kesehatan dan kesejahteraan Anda setiap hari.<br />', 'Kesehatan', 'Chat GPT', '2024-08-25 09:46:27', '2024-08-25 09:46:27', 'news_images/9KK5kql20nQWOLzaU9U26ovIB8gB8yfT9UFGsi6R.jpg'),
(57, 'Peran Vitamin dan Mineral dalam Menjaga Kesehatan Tubuh Kita', 'Vitamin dan mineral adalah nutrisi penting yang berperan dalam berbagai fungsi tubuh dan kesehatan secara keseluruhan. Keduanya membantu dalam proses metabolisme, pemeliharaan kesehatan, dan pencegahan penyakit.<br /><br />\r\n\r\n    <strong>Jenis-Jenis Vitamin dan Mineral serta Manfaatnya</strong><br />\r\n    Berikut adalah beberapa vitamin dan mineral penting beserta manfaatnya:<br /><br />\r\n\r\n    <strong>1. Vitamin A</strong><br />\r\n    Vitamin A berperan penting dalam kesehatan mata, sistem kekebalan tubuh, dan pertumbuhan sel. Sumber vitamin A termasuk wortel, ubi jalar, dan sayuran berdaun hijau.<br /><br />\r\n\r\n    <strong>2. Vitamin C</strong><br />\r\n    Vitamin C membantu dalam sintesis kolagen, penyembuhan luka, dan peningkatan sistem kekebalan tubuh. Buah-buahan seperti jeruk, kiwi, dan stroberi adalah sumber vitamin C yang baik.<br /><br />\r\n\r\n    <strong>3. Vitamin D</strong><br />\r\n    Vitamin D mendukung penyerapan kalsium dan kesehatan tulang. Sumber utama vitamin D adalah sinar matahari, namun dapat juga ditemukan dalam ikan berlemak dan produk susu yang diperkaya.<br /><br />\r\n\r\n    <strong>4. Vitamin E</strong><br />\r\n    Vitamin E bertindak sebagai antioksidan yang melindungi sel-sel tubuh dari kerusakan. Sumber vitamin E termasuk kacang-kacangan, biji-bijian, dan minyak sayur.<br /><br />\r\n\r\n    <strong>5. Kalsium</strong><br />\r\n    Kalsium penting untuk kesehatan tulang dan gigi serta fungsi otot dan saraf. Produk susu, sayuran hijau, dan makanan yang diperkaya kalsium adalah sumber yang baik.<br /><br />\r\n\r\n    <strong>6. Zat Besi</strong><br />\r\n    Zat besi berperan dalam pembentukan sel darah merah dan transportasi oksigen dalam tubuh. Daging merah, unggas, dan sayuran hijau gelap adalah sumber zat besi yang baik.<br /><br />\r\n\r\n    <strong>7. Magnesium</strong><br />\r\n    Magnesium mendukung fungsi otot dan saraf serta membantu dalam sintesis protein. Sumber magnesium termasuk kacang-kacangan, biji-bijian, dan sayuran hijau.<br /><br />\r\n\r\n    <strong>Tips Memenuhi Kebutuhan Vitamin dan Mineral</strong><br />\r\n    Untuk memastikan tubuh mendapatkan vitamin dan mineral yang cukup, pertimbangkan tips berikut:<br /><br />\r\n\r\n    <strong>1. Konsumsi Makanan Beragam</strong><br />\r\n    Makan berbagai jenis makanan, termasuk buah-buahan, sayuran, biji-bijian, dan protein sehat, dapat membantu memenuhi kebutuhan vitamin dan mineral tubuh.<br /><br />\r\n\r\n    <strong>2. Pertimbangkan Suplemen Jika Diperlukan</strong><br />\r\n    Jika sulit mendapatkan cukup vitamin dan mineral dari makanan, suplemen bisa menjadi pilihan. Namun, konsultasikan dengan tenaga medis sebelum memulai suplemen.<br /><br />\r\n\r\n    <strong>3. Perhatikan Pola Makan Sehat</strong><br />\r\n    Menghindari diet yang tidak seimbang dan memastikan asupan nutrisi yang memadai dapat membantu menjaga kesehatan tubuh secara keseluruhan.<br /><br />\r\n\r\n    Memastikan tubuh mendapatkan cukup vitamin dan mineral adalah kunci untuk kesehatan yang optimal dan pencegahan berbagai penyakit. Dengan pola makan yang seimbang dan kebiasaan hidup sehat, Anda dapat mendukung kesehatan jangka panjang Anda.<br />', 'Kesehatan', 'AI', '2024-08-25 09:53:48', '2024-08-25 09:53:48', 'news_images/7IwNlibeBsvGsU4thP8vUfpag2wVQ5Pagq9jVVq9.jpg'),
(59, 'Perkembangan Teknologi dan Dampaknya terhadap Kehidupan Sehari-hari', 'Teknologi telah mengalami perkembangan pesat dalam beberapa dekade terakhir dan telah memberikan dampak besar terhadap berbagai aspek kehidupan sehari-hari. Dari komunikasi hingga pekerjaan, teknologi telah mengubah cara kita hidup dan bekerja.<br /><br />\r\n\r\n    <strong>1. Kemajuan dalam Teknologi Komunikasi</strong><br />\r\n    Teknologi komunikasi telah berkembang jauh dari telepon kabel dan surat tradisional. Saat ini, kita dapat berkomunikasi dengan orang di seluruh dunia dalam waktu nyata melalui aplikasi pesan instan, email, dan video call.<br /><br />\r\n\r\n    <strong>2. Transformasi Digital dalam Dunia Kerja</strong><br />\r\n    Dengan kemajuan teknologi, banyak pekerjaan kini dilakukan secara digital. Alat-alat seperti perangkat lunak kolaborasi, platform manajemen proyek, dan sistem otomatisasi telah mempermudah pekerjaan dan meningkatkan produktivitas.<br /><br />\r\n\r\n    <strong>3. Pengaruh Teknologi pada Pendidikan</strong><br />\r\n    Teknologi telah membawa revolusi dalam dunia pendidikan. Pembelajaran online, kursus digital, dan platform edukasi interaktif memungkinkan akses pendidikan yang lebih luas dan fleksibel.<br /><br />\r\n\r\n    <strong>4. Perkembangan dalam Teknologi Kesehatan</strong><br />\r\n    Teknologi juga telah berperan besar dalam bidang kesehatan. Dari perangkat medis canggih hingga aplikasi kesehatan pribadi, teknologi membantu dalam diagnosis, pengobatan, dan pemantauan kesehatan.<br /><br />\r\n\r\n    <strong>5. Kecerdasan Buatan (AI) dan Dampaknya</strong><br />\r\n    Kecerdasan buatan (AI) semakin berkembang dan digunakan dalam berbagai industri. AI membantu dalam analisis data, otomatisasi tugas, dan pengambilan keputusan berbasis data. Penggunaan AI dapat meningkatkan efisiensi dan inovasi dalam berbagai sektor.<br /><br />\r\n\r\n    <strong>6. Teknologi dalam Industri Hiburan</strong><br />\r\n    Dunia hiburan juga telah berubah berkat teknologi. Streaming video, permainan video interaktif, dan realitas virtual (VR) menawarkan pengalaman hiburan yang lebih imersif dan akses yang lebih mudah ke konten.<br /><br />\r\n\r\n    <strong>7. Tantangan dan Pertimbangan Etika</strong><br />\r\n    Meskipun teknologi menawarkan banyak manfaat, ada juga tantangan dan pertimbangan etika yang perlu diperhatikan. Isu privasi, keamanan data, dan dampak sosial teknologi harus diperhatikan agar teknologi digunakan dengan cara yang bertanggung jawab.<br /><br />\r\n\r\n    Teknologi terus berkembang dan memberikan dampak yang signifikan terhadap berbagai aspek kehidupan kita. Dengan memahami manfaat dan tantangan yang dihadapi, kita dapat memanfaatkan teknologi secara efektif dan bijaksana untuk meningkatkan kualitas hidup.<br />', 'Teknologi', 'Prof Arul', '2024-08-27 00:23:38', '2024-08-27 00:23:38', 'news_images/RWwRjeSX8Ag82PTF3HceKMED3TzCf3gThIS6iWo9.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('08DPt95C8dzgaHsQgUsjRRyZc56JP1Fabes4XPrL', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQm13NVhqeTFOcWRoRHBVbE5VRjZJRm1HSWxoYVl6dnl2blNhWGc3TCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1724764467),
('h9H5kxOsCubSyEn0ePSKOIhj3RDclLbJYkdsL6yW', 2, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaFhsSVpOcWxSWmJ4NG9nVVh1T2VRdW04NXdwNkRZUHRLZGF5a1lGciI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6Mjt9', 1724747365),
('ptGCtAWMC0JeTd33i3f5yoZMwzzF0JHtFCMK3XuW', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiV21XVzhGdVUweGUxemdBTzA4N0JZZllkcENIcVN0aVFxdzgyVFMyRyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1724762933),
('TIuW7SJIzV4UEDcO2Kn03WWtAeCC04UcKqG4j1Cs', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYkczVHl1ZnRGc3RZcE5nZjFPYW5EYW9XTWh6eDlDdWVMZjQzbFpHWSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1724747172);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Arul kharisma', 'arul@gmail.com', NULL, '$2y$12$GH1JMVwGwJPftKqukDY6EOwA/HOoeQLS2WstkFz2xxuPkeo05Ai6i', '1UOkYNYv0gkEZa4kYtaEQ7fxAUyv39QhERkvp9HfUv5jHEkM5OXg5xQHNmpg', '2024-08-24 13:40:27', '2024-08-24 13:40:27'),
(2, 'admin', 'admin@gmail.com', NULL, '$2y$12$/Gquwiv9EO1lADLJ5A2kIONzJDJaVQASqZs48v5J22h2gd8uBZeu6', NULL, '2024-08-24 14:13:29', '2024-08-24 14:13:29'),
(4, 'arul3', 'arul3@gmail.com', NULL, '$2y$12$dPVTdfVN37/bYHXADLlfJeraWKpN7rbgDpvkc2K6Hy0zRUckPYSSy', NULL, '2024-08-25 06:59:16', '2024-08-25 06:59:16'),
(5, 'arul4', 'arul4@gmail.com', NULL, '$2y$12$cimZAxfO17s0HAGtWlLIB.g4RePkuqAfLrG.ddeCzE1lEPst.uSaG', NULL, '2024-08-25 07:02:18', '2024-08-25 07:02:18'),
(6, 'arkhanews', 'arkha@gmail.com', NULL, '$2y$12$r3m44lQQd0N09jq5vj9HgObD2r2wQVjUIgPA3L9BBX2bKLbECXxYy', NULL, '2024-08-27 00:41:55', '2024-08-27 00:41:55'),
(7, 'arkha1', 'arkha1@gmail.com', NULL, '$2y$12$169QzvYVHBmZt.qqGelGVeL2H17BrG8XugKqseQG43Gvchs7q7QJq', NULL, '2024-08-27 00:43:57', '2024-08-27 00:43:57'),
(8, 'arkha2', 'arkha2@gmail.com', NULL, '$2y$12$LmPekFZtRMnTbLI1d8eejOr8cIWfrp0/rmbKvtl8OJHS6p8P6O8m2', NULL, '2024-08-27 00:52:08', '2024-08-27 00:52:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
