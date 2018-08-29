<template>

  <div class="wrapper">
    <button class="btn btn-outline-secondary" v-on:click=goBack>  &larr; Назад </button>
  </div>

</template>

<script>

export default {
  name: 'ButtonBack',
  data: () => ({

  }),
  computed: {
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    }
  }
};

</script>

<style scoped>
  @import "../../css/variables.css";

  button{border-radius:0;}
  button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color;}
  button{margin:0;font-family:inherit;font-size:inherit;line-height:inherit;}
  button{overflow:visible;}
  button{text-transform:none;}
  button,html [type=button]{-webkit-appearance:button;}
  [type=button]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none;}
  .btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;}
  .btn:focus,.btn:hover{text-decoration:none;}
  .btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);}
  .btn:disabled{opacity:.65;}
  .btn:not(:disabled):not(.disabled){cursor:pointer;}
  .btn-outline-secondary{color:#6c757d;background-color:transparent;background-image:none;border-color:#6c757d;}
  .btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d;}
  .btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5);}
  .btn-outline-secondary:disabled{color:#6c757d;background-color:transparent;}

  .wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
