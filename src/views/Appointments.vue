<template>
    <div class="heading">
      <h1>List of Appointments</h1>
      <hr class="divider">
    </div>


  <div class="card-container">
    <div v-for="appointment in appointments" :key="appointment.id" class="card">
      <p class="text"><span>Student ID: </span> {{ appointment.students_id }}</p>
      <p class="text"><span>Counselor ID: </span> {{ appointment.counselors_id }}</p>
      <p class="text"><span>Date: </span>{{ appointment.appointment_date }}</p>
      <p class="text"><span>Status: </span>{{ appointment.appointment_status }}</p>
      <p class="text"><span>Cancellation Information: </span>{{ appointment.cancellation_info }}</p>
      <p class="text"><span>Comment: </span>{{ appointment.comment }}</p>
      </div>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        appointments: [
    {
      "id": 1,
      "students_id": 21,
      "counselors_id": 2,
      "appointment_date": "2023-12-23 11:21:30",
      "appointment_status": "scheduled",
      "cancellation_info": "Quo aut praesentium cupiditate. Modi laborum eum ea dicta omnis sint temporibus. Et nisi quibusdam non eligendi esse. Deserunt optio voluptates aut blanditiis ut. Eos quibusdam voluptates et omnis.",
      "comment": "Ullam nihil commodi quidem neque. Ab sint voluptatum ipsam facere ut nostrum cupiditate et. Molestias voluptatibus et laboriosam qui. Laudantium vel vel ad.",
      "created_at": "2023-12-16T12:22:57.000000Z",
      "updated_at": "2023-12-16T12:22:57.000000Z"
    },
    {
      "id": 2,
      "students_id": 29,
      "counselors_id": 10,
      "appointment_date": "2023-12-29 11:03:13",
      "appointment_status": "scheduled",
      "cancellation_info": "Consequuntur doloremque rerum architecto in. Vitae aperiam magnam commodi ab quia corporis necessitatibus. Aperiam iste ut voluptatem ducimus.",
      "comment": "Quisquam recusandae nulla officiis accusamus delectus. Dicta reiciendis delectus dolore expedita aut et dolores ut. Nesciunt doloribus sint facere magnam.",
      "created_at": "2023-12-16T12:22:57.000000Z",
      "updated_at": "2023-12-16T12:22:57.000000Z"
    },
    {
      "id": 4,
      "students_id": 7,
      "counselors_id": 8,
      "appointment_date": "2024-01-08 11:25:20",
      "appointment_status": "scheduled",
      "cancellation_info": "Sint aut aut omnis voluptas fugit vel dignissimos. Voluptatem veniam nesciunt officia qui nemo ab dolorem. Consequuntur et et ad cupiditate aperiam dignissimos. Error animi iure cum quod rem.",
      "comment": "Ratione enim minima laboriosam id sed. Occaecati enim aut et numquam. Aut alias vitae mollitia quos laudantium.",
      "created_at": "2023-12-16T12:22:57.000000Z",
      "updated_at": "2023-12-16T12:22:57.000000Z"
    },
    {
      "id": 5,
      "students_id": 31,
      "counselors_id": 5,
      "appointment_date": "2023-12-28 04:03:14",
      "appointment_status": "scheduled",
      "cancellation_info": "Adipisci ad nihil cupiditate quia. Et at qui sed nisi natus et consequuntur. Eos dolores mollitia quos temporibus quis. Commodi quia atque saepe dolorem.",
      "comment": "Molestiae et non corrupti ipsa libero. Quia sed facilis quasi autem. Excepturi magni voluptatem veniam repellendus. Atque cum aliquam iure esse sapiente eius.",
      "created_at": "2023-12-16T12:22:57.000000Z",
      "updated_at": "2023-12-16T12:22:57.000000Z"
    },
    {
      "id": 6,
      "students_id": 21,
      "counselors_id": 1,
      "appointment_date": "2024-01-08 05:30:28",
      "appointment_status": "scheduled",
      "cancellation_info": "Iusto pariatur at et ea autem aut maiores quia. Et eius magnam est natus accusamus commodi. Ipsum eaque voluptatem placeat maxime molestias. Voluptates aliquid fuga aliquam error doloribus.",
      "comment": "Veritatis possimus quisquam sit porro necessitatibus est ea. Nostrum officiis dolor fuga quia molestiae nulla sit. Tempora accusantium corrupti quibusdam voluptatem nostrum iste debitis. Ullam et occaecati ad a nisi libero.",
      "created_at": "2023-12-16T12:22:57.000000Z",
      "updated_at": "2023-12-16T12:22:57.000000Z"
    },
    {
      "id": 7,
      "students_id": 29,
      "counselors_id": 2,
      "appointment_date": "2024-01-02 08:13:03",
      "appointment_status": "scheduled",
      "cancellation_info": "Sint maxime delectus labore modi aut eos. Corporis sit est consectetur et consequuntur. Fuga iste optio eum veritatis maiores eius. Non quis culpa fugiat voluptatem sint sapiente. Ipsum cumque non aperiam nam quisquam quod debitis.",
      "comment": "Enim vel qui rerum fugiat. Magni sed in est eaque.",
      "created_at": "2023-12-16T12:22:57.000000Z",
      "updated_at": "2023-12-16T12:22:57.000000Z"
    },
    {
      "id": 8,
      "students_id": 37,
      "counselors_id": 10,
      "appointment_date": "2024-01-16 03:34:41",
      "appointment_status": "scheduled",
      "cancellation_info": "Numquam autem quaerat pariatur fugit sunt. Ratione cumque ut perspiciatis tenetur assumenda.",
      "comment": "Harum rerum id voluptatibus illum nostrum neque ab. Non in dolorem officiis ut neque omnis. Consequatur ut quaerat est illo ullam totam. Suscipit ut aliquid inventore nam omnis est commodi.",
      "created_at": "2023-12-16T12:22:57.000000Z",
      "updated_at": "2023-12-16T12:22:57.000000Z"
    },
    {
      "id": 9,
      "students_id": 50,
      "counselors_id": 2,
      "appointment_date": "2024-01-15 23:41:52",
      "appointment_status": "scheduled",
      "cancellation_info": "Omnis impedit non eius vero. Accusamus est mollitia aut dolores consectetur. Omnis officia perspiciatis laudantium nisi est officia magnam. Porro nobis at deserunt et voluptas et.",
      "comment": "Asperiores perspiciatis cum sapiente qui voluptas. Ut a cumque sit quo nobis et aut. Aut temporibus eos qui iure. Quia magni vel non totam saepe.",
      "created_at": "2023-12-16T12:22:57.000000Z",
      "updated_at": "2023-12-16T12:22:57.000000Z"
    },
    {
      "id": 10,
      "students_id": 32,
      "counselors_id": 4,
      "appointment_date": "2023-12-25 10:57:19",
      "appointment_status": "scheduled",
      "cancellation_info": "Ullam quidem et excepturi. Amet similique magni illo est.",
      "comment": "Necessitatibus et sint vel eum eos mollitia quo. Necessitatibus voluptas voluptatibus eius aut qui. Natus dignissimos fugiat adipisci ratione repellat hic tenetur.",
      "created_at": "2023-12-16T12:22:57.000000Z",
      "updated_at": "2023-12-16T12:22:57.000000Z"
    },
    {
      "id": 12,
      "students_id": 5,
      "counselors_id": 5,
      "appointment_date": "2023-12-26 02:50:00",
      "appointment_status": "scheduled",
      "cancellation_info": "bsdfyGEFG",
      "comment": "ehrgiarig",
      "created_at": "2023-12-17T06:50:19.000000Z",
      "updated_at": "2023-12-17T06:50:19.000000Z"
    }
  ]
}
    }
  };
  </script>
  
  <style scoped>
  
  h1 {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

  .card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  background-color: #ffffff6f;
  height: 320px;
  margin-top: 5%;
}

.card:hover {
  transform: translateY(-7px);
}

.title {
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-weight: 600;
  margin-left: 20px;
}

.text {
  margin-left: 15px;
  margin-top: 5px;
}
span{
  font-weight: bold;
}
.divider {
   border: 1.5px solid #c5c5c5;
   width: 50%;
   margin: 10px auto;
}
  </style>
  