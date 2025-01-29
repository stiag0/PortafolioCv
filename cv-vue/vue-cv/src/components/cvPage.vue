<template>
  <div class="cv-page">
    <header>
      <h1>{{ name }}</h1>
      <p>{{ title }}</p>
    </header>
    <section>
      <h2>Experience</h2>
      <ul>
        <li v-for="job in experience" :key="job.id">
          <h3>{{ job.position }}</h3>
          <p>{{ job.company }} - {{ job.years }}</p>
          <p>{{ job.description }}</p>
        </li>
      </ul>
    </section>
    <section>
      <h2>Education</h2>
      <ul>
        <li v-for="school in education" :key="school.id">
          <h3>{{ school.degree }}</h3>
          <p>{{ school.institution }} - {{ school.years }}</p>
        </li>
      </ul>
    </section>
    <section>
      <h2>Skills</h2>
      <ul>
        <li v-for="skill in skills" :key="skill.id">{{ skill.name }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'John Doe',
      title: 'Software Developer',
      experience: [
        { id: 1, position: 'Senior Developer', company: 'Company A', years: '2018-2021', description: 'Worked on various projects...' },
        { id: 2, position: 'Junior Developer', company: 'Company B', years: '2015-2018', description: 'Assisted in development...' }
      ],
      education: [
        { id: 1, degree: 'B.Sc. Computer Science', institution: 'University X', years: '2011-2015' }
      ],
      skills: [
        { id: 1, name: 'JavaScript' },
        { id: 2, name: 'Vue.js' },
        { id: 3, name: 'HTML/CSS' }
      ]
    };
  }
};
</script>

<style scoped>
.cv-page {
  font-family: Arial, sans-serif;
  margin: 20px;
}

header {
  text-align: center;
}

section {
  margin-top: 20px;
}

h2 {
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>