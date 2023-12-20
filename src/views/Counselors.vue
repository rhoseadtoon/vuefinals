<template>
    <div class="heading">
      <h1>Counselors</h1>
      <hr class="divider">
    </div>

  <div class="card-container">
    <div v-for="counselor in counselors" class="card">
      <h2 class="title">{{ counselor.fullname }}</h2>
      <p class="text">Contact: <span class="contact">{{ counselor.contact }}</span></p>
      <p class="text">Specialty: <span class="specialty">{{ counselor.specialty }}</span></p>
       <p class="card-text">Availability: {{ counselor.availability ? 'Available' : 'Not Available' }}</p>
      <div class="b"><a href="#" class="btn">Contact Now</a></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counselors: [
      {
        "id": 4,
        "fullname": "Enola Jacobs",
        "contact": "+1-458-834-6598",
        "specialty": "School and Career Counseling",
        "availability": 0,
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 5,
        "fullname": "Genesis Ledner",
        "contact": "1-279-238-2159",
        "specialty": "School and Career Counseling",
        "availability": 1,
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 8,
        "fullname": "Miss Eleanora Rice",
        "contact": "726.257.3362",
        "specialty": "School and Career Counseling",
        "availability": 1,
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 9,
        "fullname": "Mr. Conner Runte DDS",
        "contact": "(952) 442-4597",
        "specialty": "Family Problem Counseling",
        "availability": 0,
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 10,
        "fullname": "Natalie Bahringer",
        "contact": "+1.678.432.3058",
        "specialty": "Family Problem Counseling",
        "availability": 1,
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 1,
        "fullname": "Prof. Gilda Will",
        "contact": "+12838158884",
        "specialty": "School and Career Counseling",
        "availability": 1,
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 2,
        "fullname": "Sedrick Mayert",
        "contact": "1-801-316-6177",
        "specialty": "School and Career Counseling",
        "availability": 0,
        "created_at": "2023-12-16T12:22:56.000000Z",
        "updated_at": "2023-12-16T12:22:56.000000Z"
      },
      {
        "id": 6,
        "fullname": "Sarah Magtanggol",
        "contact": "+63912345678",
        "specialty": "School and Career Counseling",
        "availability": 1,
      },
      {
        "id": 3,
        "fullname": "Angel Cruz",
        "contact": "+1235234682",
        "specialty": "School and Career Counseling",
        "availability": 0,
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
  justify-content: center;
}

.card {
  position: relative;
  border: 1px solid #ddd; 
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  max-width: 300px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  background-color: #ffffff6f;
  height: 250px; /* Adjust as needed */
  margin-top: 5%;
}

.card:hover {
  transform: translateY(-7px);
}

.title {
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
}

.text {
  margin-left: 15px;
  margin-top: 5px;
}

.card-body {
  padding: 15px;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 10px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 800;
}

.card-text {
  color: #555;
  height: 80px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  margin-left: 16px;
}

.btn {
  display: inline-block;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: #007bff;
  margin-top: px;
}

.b {
  display: flex;
  align-items: center;
  margin-left: 20px;
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
