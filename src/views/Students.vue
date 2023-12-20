<template>
  <div class="heading">
  <h1>Students</h1>
  <hr class="divider">
</div>


  <div class="card-container">
    <div v-for="student in students" class="card">
      <i class="bi bi-backpack4-fill"></i>
      <h2 class="title">{{ student.fullname }}</h2>
      <p class="text">Course: {{ student.course }}</p>
      <p class="text">Year Level: {{ student.year_level }}</p>
      <p class="text">Email: {{ student.email }}</p>
      <p class="text">Contact: {{ student.contact }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
      {
        "id": 14,
        "fullname": "Adam Murazik",
        "course": "BSED",
        "year_level": "1",
        "email": "hgusikowski@example.net",
        "contact": "585-599-3054",
        "created_at": "2023-12-16T12:22:55.000000Z",
        "updated_at": "2023-12-16T12:22:55.000000Z"
      },
      {
        "id": 34,
        "fullname": "Allie Harber IV",
        "course": "BSED",
        "year_level": "1",
        "email": "rogahn.jairo@example.com",
        "contact": "1-346-942-1268",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 37,
        "fullname": "Antonio Spencer",
        "course": "BSBA",
        "year_level": "4",
        "email": "bret.kshlerin@example.net",
        "contact": "1-620-991-5067",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 5,
        "fullname": "Beaulah Nicolas",
        "course": "BSIT",
        "year_level": "3",
        "email": "yhoppe@example.net",
        "contact": "989-940-7194",
        "created_at": "2023-12-16T12:22:54.000000Z",
        "updated_at": "2023-12-16T12:22:54.000000Z"
      },
      {
        "id": 7,
        "fullname": "Cathryn Bashirian",
        "course": "BSED",
        "year_level": "1",
        "email": "aubree15@example.org",
        "contact": "(828) 467-6282",
        "created_at": "2023-12-16T12:22:54.000000Z",
        "updated_at": "2023-12-16T12:22:54.000000Z"
      },
      {
        "id": 6,
        "fullname": "Chaya Jaskolski",
        "course": "BSBA",
        "year_level": "2",
        "email": "adolfo37@example.net",
        "contact": "320-972-7679",
        "created_at": "2023-12-16T12:22:54.000000Z",
        "updated_at": "2023-12-16T12:22:54.000000Z"
      },
      {
        "id": 40,
        "fullname": "Cleveland Jacobi",
        "course": "BSN",
        "year_level": "3",
        "email": "oosinski@example.org",
        "contact": "754-908-0348",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 1,
        "fullname": "Cooper Haag",
        "course": "BSED",
        "year_level": "2",
        "email": "gstanton@example.com",
        "contact": "+13603331062",
        "created_at": "2023-12-16T12:22:54.000000Z",
        "updated_at": "2023-12-16T12:22:54.000000Z"
      },
      {
        "id": 15,
        "fullname": "Demario Schneider",
        "course": "BSED",
        "year_level": "1",
        "email": "bailey.golden@example.org",
        "contact": "(520) 494-3694",
        "created_at": "2023-12-16T12:22:55.000000Z",
        "updated_at": "2023-12-16T12:22:55.000000Z"
      },
      {
        "id": 22,
        "fullname": "Domenic Yundt",
        "course": "BSHM",
        "year_level": "4",
        "email": "eryn63@example.org",
        "contact": "+1-917-420-6217",
        "created_at": "2023-12-16T12:22:55.000000Z",
        "updated_at": "2023-12-16T12:22:55.000000Z"
      },
      {
        "id": 33,
        "fullname": "Dr. Alycia Monahan",
        "course": "BSCRIM",
        "year_level": "1",
        "email": "juliet68@example.org",
        "contact": "1-305-750-0662",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 49,
        "fullname": "Dr. Dariana Lesch",
        "course": "BSED",
        "year_level": "4",
        "email": "erica66@example.com",
        "contact": "+1-248-712-6936",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 45,
        "fullname": "Dr. Jaren Fahey",
        "course": "BSCRIM",
        "year_level": "1",
        "email": "adrian11@example.org",
        "contact": "(281) 366-9785",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 25,
        "fullname": "Dr. Kelsie Jacobi",
        "course": "BSN",
        "year_level": "1",
        "email": "nicholaus14@example.com",
        "contact": "(619) 708-7136",
        "created_at": "2023-12-16T12:22:55.000000Z",
        "updated_at": "2023-12-16T12:22:55.000000Z"
      },
      {
        "id": 50,
        "fullname": "Eden Blick",
        "course": "BSIT",
        "year_level": "4",
        "email": "alexane.mccullough@example.com",
        "contact": "+1-662-755-6453",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 39,
        "fullname": "Elias Fahey",
        "course": "BSCRIM",
        "year_level": "3",
        "email": "ogibson@example.net",
        "contact": "+1.747.480.4224",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 2,
        "fullname": "Ericka Lang",
        "course": "BSIT",
        "year_level": "4",
        "email": "wyman.ford@example.net",
        "contact": "1-726-393-8294",
        "created_at": "2023-12-16T12:22:54.000000Z",
        "updated_at": "2023-12-16T12:22:54.000000Z"
      },
      {
        "id": 31,
        "fullname": "Ewald Stark",
        "course": "BSCRIM",
        "year_level": "1",
        "email": "meaghan.bosco@example.com",
        "contact": "+1 (570) 421-5874",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 17,
        "fullname": "Friedrich Kuhn",
        "course": "BSIT",
        "year_level": "3",
        "email": "robel.dorian@example.org",
        "contact": "424-883-5923",
        "created_at": "2023-12-16T12:22:55.000000Z",
        "updated_at": "2023-12-16T12:22:55.000000Z"
      },
      {
        "id": 44,
        "fullname": "Harold Ratke",
        "course": "BSBA",
        "year_level": "2",
        "email": "lockman.anissa@example.net",
        "contact": "615.286.7565",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 10,
        "fullname": "Hazle Hauck Sr.",
        "course": "BSIT",
        "year_level": "3",
        "email": "jessyca.kshlerin@example.org",
        "contact": "+12482515428",
        "created_at": "2023-12-16T12:22:54.000000Z",
        "updated_at": "2023-12-16T12:22:54.000000Z"
      },
      {
        "id": 26,
        "fullname": "Hulda Harvey",
        "course": "BSCRIM",
        "year_level": "1",
        "email": "devan.yundt@example.com",
        "contact": "845-380-1184",
        "created_at": "2023-12-16T12:22:55.000000Z",
        "updated_at": "2023-12-16T12:22:55.000000Z"
      },
      {
        "id": 30,
        "fullname": "Humberto Gislason",
        "course": "BSIT",
        "year_level": "1",
        "email": "wava80@example.net",
        "contact": "1-215-309-8499",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 42,
        "fullname": "Jaleel Mann I",
        "course": "BSED",
        "year_level": "1",
        "email": "mosciski.colleen@example.net",
        "contact": "+17605661993",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 21,
        "fullname": "Janie Labadie",
        "course": "BSCRIM",
        "year_level": "3",
        "email": "kkulas@example.net",
        "contact": "1-820-997-6416",
        "created_at": "2023-12-16T12:22:55.000000Z",
        "updated_at": "2023-12-16T12:22:55.000000Z"
      },
      {
        "id": 28,
        "fullname": "Joan Beer",
        "course": "BSCRIM",
        "year_level": "2",
        "email": "fisher.minerva@example.org",
        "contact": "+1-640-481-6276",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 29,
        "fullname": "Jose Kerluke",
        "course": "BSIT",
        "year_level": "1",
        "email": "joy40@example.com",
        "contact": "(530) 283-2195",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 36,
        "fullname": "Jovanny Beier",
        "course": "BSIT",
        "year_level": "1",
        "email": "winnifred48@example.com",
        "contact": "469.200.2564",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 9,
        "fullname": "Keagan Jast",
        "course": "BSED",
        "year_level": "3",
        "email": "cvolkman@example.com",
        "contact": "+1-938-525-7052",
        "created_at": "2023-12-16T12:22:54.000000Z",
        "updated_at": "2023-12-16T12:22:54.000000Z"
      },
      {
        "id": 4,
        "fullname": "Letitia Lang DDS",
        "course": "BSBA",
        "year_level": "1",
        "email": "lessie.considine@example.net",
        "contact": "(605) 678-3187",
        "created_at": "2023-12-16T12:22:54.000000Z",
        "updated_at": "2023-12-16T12:22:54.000000Z"
      },
      {
        "id": 8,
        "fullname": "Madie Greenholt",
        "course": "BSCRIM",
        "year_level": "1",
        "email": "wruecker@example.net",
        "contact": "+1-319-525-3531",
        "created_at": "2023-12-16T12:22:54.000000Z",
        "updated_at": "2023-12-16T12:22:54.000000Z"
      },
      {
        "id": 27,
        "fullname": "Makenna Jacobi",
        "course": "BSED",
        "year_level": "3",
        "email": "dlemke@example.com",
        "contact": "559-772-7952",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 41,
        "fullname": "Marilyne Schmitt II",
        "course": "BSBA",
        "year_level": "3",
        "email": "luettgen.ofelia@example.org",
        "contact": "(814) 585-9488",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 32,
        "fullname": "Marlen Lesch",
        "course": "BSCRIM",
        "year_level": "4",
        "email": "jewel.walker@example.net",
        "contact": "(720) 485-0760",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 47,
        "fullname": "Maximo Quitzon",
        "course": "BSED",
        "year_level": "2",
        "email": "ogrimes@example.org",
        "contact": "+1 (820) 297-2402",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 38,
        "fullname": "Melyna Rau",
        "course": "BSED",
        "year_level": "1",
        "email": "fkilback@example.com",
        "contact": "+1.678.974.8433",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 48,
        "fullname": "Milan McLaughlin",
        "course": "BSCRIM",
        "year_level": "3",
        "email": "johnson.kirk@example.net",
        "contact": "+1-763-389-0448",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 20,
        "fullname": "Miss Matilda Cummings",
        "course": "BSBA",
        "year_level": "4",
        "email": "shirthe@example.org",
        "contact": "+1-929-276-0694",
        "created_at": "2023-12-16T12:22:55.000000Z",
        "updated_at": "2023-12-16T12:22:55.000000Z"
      },
      {
        "id": 43,
        "fullname": "Miss Yasmeen Skiles IV",
        "course": "BSED",
        "year_level": "2",
        "email": "oreilly.leonora@example.net",
        "contact": "1-517-289-5637",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 13,
        "fullname": "Mrs. Ashlynn Donnelly PhD",
        "course": "BSBA",
        "year_level": "2",
        "email": "amelie.huels@example.net",
        "contact": "917-417-3406",
        "created_at": "2023-12-16T12:22:55.000000Z",
        "updated_at": "2023-12-16T12:22:55.000000Z"
      },
      {
        "id": 23,
        "fullname": "Mrs. Danyka Mertz",
        "course": "BSBA",
        "year_level": "1",
        "email": "turcotte.marcelina@example.net",
        "contact": "458-351-4225",
        "created_at": "2023-12-16T12:22:55.000000Z",
        "updated_at": "2023-12-16T12:22:55.000000Z"
      },
      {
        "id": 24,
        "fullname": "Ms. Nicole Cassin",
        "course": "BSCRIM",
        "year_level": "4",
        "email": "jo.champlin@example.org",
        "contact": "+1.307.799.0991",
        "created_at": "2023-12-16T12:22:55.000000Z",
        "updated_at": "2023-12-16T12:22:55.000000Z"
      },
      {
        "id": 12,
        "fullname": "Myrtis Zemlak",
        "course": "BSIT",
        "year_level": "1",
        "email": "susan24@example.net",
        "contact": "+1-301-306-6929",
        "created_at": "2023-12-16T12:22:55.000000Z",
        "updated_at": "2023-12-16T12:22:55.000000Z"
      },
      {
        "id": 19,
        "fullname": "Prof. Carlee McKenzie V",
        "course": "BSBA",
        "year_level": "4",
        "email": "cnader@example.com",
        "contact": "813.310.2227",
        "created_at": "2023-12-16T12:22:55.000000Z",
        "updated_at": "2023-12-16T12:22:55.000000Z"
      },
      {
        "id": 16,
        "fullname": "Prof. Glennie Murray",
        "course": "BSIT",
        "year_level": "1",
        "email": "harvey.jay@example.org",
        "contact": "+1-531-846-9564",
        "created_at": "2023-12-16T12:22:55.000000Z",
        "updated_at": "2023-12-16T12:22:55.000000Z"
      },
      {
        "id": 3,
        "fullname": "Rhoda Hill",
        "course": "BSIT",
        "year_level": "3",
        "email": "luther48@example.com",
        "contact": "(540) 641-4622",
        "created_at": "2023-12-16T12:22:54.000000Z",
        "updated_at": "2023-12-16T12:22:54.000000Z"
      },
      {
        "id": 35,
        "fullname": "Ron Wintheiser",
        "course": "BSN",
        "year_level": "1",
        "email": "schimmel.alvena@example.org",
        "contact": "1-530-296-5745",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 18,
        "fullname": "Ruth Jast",
        "course": "BSN",
        "year_level": "1",
        "email": "oswald.grimes@example.net",
        "contact": "+1.785.221.0016",
        "created_at": "2023-12-16T12:22:55.000000Z",
        "updated_at": "2023-12-16T12:22:55.000000Z"
      },
      {
        "id": 46,
        "fullname": "Trever Wolf",
        "course": "BSBA",
        "year_level": "3",
        "email": "doug.rogahn@example.org",
        "contact": "(828) 378-8284",
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 11,
        "fullname": "Velda Stehr III",
        "course": "BSIT",
        "year_level": "4",
        "email": "hswaniawski@example.org",
        "contact": "1-757-590-8257",
        "created_at": "2023-12-16T12:22:55.000000Z",
        "updated_at": "2023-12-16T12:22:55.000000Z"
      }
    ]
  }

  }
}
</script>

<style scoped>

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
  width: calc(28.33% - 20px); 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px; 
  margin-left: 50px;
  position: relative;
  margin-top: 20px;
}
.title {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.text {
  margin: 5px 0;
}
.icon {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 24px;
}
h1 {
 font-size: 1.5rem;
 font-weight: bold;
 text-align: center;
 margin-top: 30px;
 font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.divider {
   border: 1.5px solid #c5c5c5;
   width: 50%;
   margin: 10px auto;
}
</style>
