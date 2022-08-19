<template>
  <form class="sign-up" @submit.prevent="checkForm">
    <div class="form-group">
      <label for="login">
        Логин
      </label>
      <input
          id="login"
          class="valid-form__input"
          :class="($v.form.login.$invalid || $v.form.login.
          $error) ? 'is-invalid': 'is-valid'"
          v-model.trim="form.login"
      >
      <p v-if="$v.form.login.$invalid && !$v.form.login.required" class="invalid-feedback">
        Обязательное поле
      </p>
      <p v-if="$v.form.login.$invalid && !$v.form.login.minLength" class="invalid-feedback">
        Здесь должно быть больше 5-и символов
      </p>
    </div>
    <div class="form-group">
      <label for="email">
        Почта
      </label>
      <input
          id="email"
          type="email"
          class="valid-form__input"
          :class="$v.form.email.$invalid ? 'is-invalid': 'is-valid'"
          v-model.trim="form.email"
      >

      <p v-if="$v.form.email.$invalid && !$v.form.email.required" class="invalid-feedback">
        Обязательное поле
      </p>
      <p v-if="$v.form.email.$invalid && !$v.form.email.email" class="invalid-feedback">
        Email некорректный
      </p>

    </div>
    <div class="form-group">
      <label for="password">
        Пароль
      </label>
      <input
          id="password"
          type="password"
          class="valid-form__input"
          :class="$v.form.password.$error ? 'is-invalid': 'is-valid'"
          v-model.trim="form.password"
      >
      <p v-if="$v.form.password.$invalid && !$v.form.password.required" class="invalid-feedback">
        Обязательное поле
      </p>
    </div>
    <div class="form-group">
      <label for="country">
        Страна
      </label>
      <select
          id="country" class="valid-form__input"
          v-model="form.country"
      >
        <option
            v-for="(country, index) of countries"
            :key='index'
            :value="country.value"
        >
          {{ country.label }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="speciality">
        Специализация
      </label>
      <select
          id="speciality" class="valid-form__input select"
          multiple
          v-model="form.favoriteThemes">
        <!--          :class="$v.form.groupFavoriteThemes.$required"-->
        <!--      >-->
        <option
            v-for="(speciality, index) of themes"
            :key='index'
            :value="speciality.value"
        >
          {{ speciality.label }}
        </option>
      </select>
      <p v-if="$v.form.favoriteThemes.$invalid" class="invalid-feedback">
        Не больше трех пунктов на выбор
      </p>
    </div>

    <div class="form-check--reles">
      <input
          type="checkbox"
          class="form-check-input"
          :class="$v.form.agreeWithRules.$required ? 'is-invalid' : '' "
          id="notification"
          v-model="form.agreeWithRules"
      >
      <label class="form-check-label" for="notification">Ознакомлен(а) с правилами</label>

      <p v-if="$v.form.agreeWithRules.$invalid && !$v.form. agreeWithRules.required" class="invalid-feedback">
        Обязательное поле
      </p>
    </div>

    <div>
      <div class="form-check">
        <input type="checkbox" value="1" class="form-check-input" id="notification1" v-model="form.agreeWithSendEmail">
        <label class="form-check-label" for="notification1">Уведомлять меня о новых курсах</label>
      </div>
      <div class="form-check">
        <input type="checkbox" value="2" class="form-check-input" id="notification2" v-model="form.agreeWithSendEmail">
        <label class="form-check-label" for="notification2">Уведомлять меня о новых уроках</label>
      </div>
      <div class="form-check">
        <input type="checkbox" value="3" class="form-check-input" id="notification3" v-model="form.agreeWithSendEmail">
        <label class="form-check-label" for="notification3">Уведомлять меня о новых вебинарах</label>
      </div>
    </div>

    <div class="flex">
      <div class="form-check">
        <input type="radio" class="form-check-input" value="female" id="female" name="exampleRadios"
               v-model="form.gendere">
        <label class="form-check-label" for="female">Женщина</label>
      </div>
      <div class="form-check">
        <input type="radio" class="form-check-input" value="male" id="male" name="exampleRadios" v-model="form.gendere">
        <label class="form-check-label" for="male">Мужчина</label>
      </div>
    </div>

    <button
        type="submit"
        class="check-button"
    >
      Сохранить
    </button>
  </form>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, minLength, email, maxLength} from 'vuelidate/lib/validators'

export default {
  name: "ValidForm",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        login: '',
        email: '',
        password: '',
        country: 'Russia',
        favoriteThemes: ['IT'],
        agreeWithSendEmail: [],
        agreeWithRules: [],
        gendere: 'male',
      },
      countries: [
        {
          label: 'Россия',
          value: 'Russia'
        },
        {
          label: 'Македония',
          value: 'Macedonia'
        },
        {
          label: 'Испания',
          value: 'Spain'
        },
        {
          label: 'Аргентина',
          value: 'Argentina'
        }
      ],
      themes: [
        {
          label: 'Технологии',
          value: 'IT'
        },
        {
          label: 'Фронтенд',
          value: 'front-end'
        },
        {
          label: 'Разработка приложений',
          value: 'dev app'
        },
        {
          label: 'Джуниор',
          value: 'Junior'
        },
      ]
    }
  },
  validations: {
    form: {
      login: {required, minLength: minLength(5)},
      email: {required, email},
      password: {required},
      agreeWithRules: {required},
      favoriteThemes: {required, maxLength: maxLength(3)}
    }
  },
  methods: {
    checkForm() {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        console.log("Валидация прошла успешно")
      }
      else {
        console.log("Заполните все обязательные поля")
      }
    }
  }
}
</script>

<style lang="scss" src="./Error.scss" scoped/>
