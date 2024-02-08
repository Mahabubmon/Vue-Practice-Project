<template>
   <div class="card">
    <div class="card-header">
        <h4>
            Students
            <RouterLink to="/student/create" class="btn btn-primary float-end" >
                Add Student
            </RouterLink>
        </h4>
    </div>
    <div class="card-body">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Created At</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(student, index) in this.student" :key="index">
                    <td>{{student.id}}</td>
                    <td>{{student.name}}</td>
                    <td>{{student.course}}</td>
                    <td>{{student.email}}</td>
                    <td>{{student.phone}}</td>
                    <td>{{student.created_at }}</td>
                    <td>
                        <RouterLink to="/"  class="btn btn-primary float-end" >
                            Add Student
                        </RouterLink>
                        <button>Delete</button>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>

   </div>
</template>


<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';
export default {
    name: 'student',
    data() {
        return {
            student: []
        };
    },
    mounted() {
        this.getStudents();
        // console.log('I am here');
    },
    methods: {
        getStudents() {
            axios.get('http://localhost:8000/api/students').then(res => {
                this.student = res.data.student;
                // console.log(this.student);
            });
        }
    },
    components: { RouterLink }
}


</script>