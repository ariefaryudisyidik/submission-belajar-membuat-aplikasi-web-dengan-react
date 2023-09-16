export const notesList = [
    {
        id: 1,
        title: "Babel",
        body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
      },
      {
        id: 2,
        title: "Functional Component",
        body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
      },
      {
        id: 3,
        title: "Modularization",
        body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
      },
      {
        id: 4,
        title: "Lifecycle",
        body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
      },
      {
        id: 5,
        title: "ESM",
        body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
      },
      {
        id: 6,
        title: "Module Bundler",
        body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
      },
    {
        id: Date.now().toString(),
        title: 'JavaScript',
        body: 'JavaScript merupakan sebuah general purpose programming language yang dibuat oleh Brendan Eich ketika bekerja di Netscape. Saat ini JavaScript merupakan salah satu bahasa pemrograman terpopuler. Hal ini dikarenakan JavaScript dapat digunakan baik di sisi server dan client. Untuk sisi client sendiri hampir semua platform web menggunakan JavaScript.',
        archieved: true,
        createdAt: new Date(2022, 3, 1).toISOString()
    },
    {
        id: (Date.now() + 1).toString,
        title: 'ReactJS',
        body: 'ReactJS merupakan library JavaScript paling populer. ReactJS merupakan sebuah library UI yang menggunakan konsep komponen untuk membuat UI dengan mudah. ReactJS sendiri tidak terbatas untuk platform web, ReactJS juga dapat digunakan untuk membuat aplikasi mobile dan desktop menggunakan React Native.',
        archieved: true,
        createdAt: new Date(2022, 1, 14).toISOString()
    }
];