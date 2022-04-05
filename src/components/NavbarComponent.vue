<template>
	<div class="navbar">
		<div>Мои посты</div>
		<my-button class="navbar__button" @click="$router.push('/')">Главная</my-button>
		<div class="navbar__buttons">
			<my-button class="navbar__button" @click="$router.push('/posts')">Посты</my-button>
			<my-button class="navbar__button" @click="$router.push('/about')">Обо мне</my-button>
		</div>
	</div>
</template>

<script>
import MyButton from './UI/MyButton.vue'
export default {
  components: { MyButton },

}
</script>

<style scoped>
.navbar{
	display: flex;
	align-items: center;
	padding: 0 20px;
	height: 50px;
	background-color: lightgray;
	box-shadow: 2px 2px 4px gray;
}
.navbar__buttons{
	margin-left: auto;
}
.navbar__button{
	margin-left: 15px;
}
</style>