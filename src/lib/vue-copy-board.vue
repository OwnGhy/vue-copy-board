<template>
  <div class="copy-board">
    <div class="copy-head">
      <span>{{title}}</span>
      <button class="copy-btn" @click="copy">
        <svg t="1531123983183" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1063" width="200" height="200">
          <path d="M320 768h192v64h-192zM320 640h128v64h-128zM320 512h192v64h-192zM320 384h320v64H320zM896 640h-224v-96l-147.968 128L672 800v-96h224v-64z" fill="#ffffff" p-id="1064"></path>
          <path d="M768 768v128H256V320h512v256h64V195.2A67.2 67.2 0 0 0 764.8 128h-162.688a95.424 95.424 0 0 0-180.192 0H259.2A67.2 67.2 0 0 0 192 195.2v697.6A67.2 67.2 0 0 0 259.2 960h505.6a67.2 67.2 0 0 0 67.2-67.2V768h-64zM339.776 192h78.368A30.784 30.784 0 0 0 448 159.776a64 64 0 0 1 73.6-63.072 68.736 68.736 0 0 1 54.4 67.2A31.552 31.552 0 0 0 608 192h76.16a32 32 0 0 1 28.608 17.696L736 256H288l23.168-46.304A32 32 0 0 1 339.776 192z" fill="#ffffff" p-id="1065"></path>
        </svg>
        <span>copy</span>
      </button>
    </div>
    <div v-if="type === 'text'" class="copy-content">
      <slot></slot>
    </div>
    <pre v-else>
      <code :class='`language-${language}`'>
        <slot></slot>
      </code>
    </pre>
  </div>
</template>
<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism.css'

  export default {
    name: 'vue-copy-board',
    props: {
      title: {
        type: String,
        default: ''
      },
      content: String,
      type: {
        type: String,
        default: 'text',
        enum: ['text', 'code']
      },
      language: {
        type: String,
        default: 'js'
      }
    },
    methods: {
      copy() {
        console.log(this.$slots);
        const txt = this.$slots.default[0].text;
        var oInput = document.createElement('input');
        oInput.value = txt;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display='none';
      }
    }
  }
</script>
<style lang="scss">
  .copy-board {
    width: 100%;
    .copy-head {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #ddd;
      .copy-btn {
        border: none;
        background: #ddd;
        display: flex;
        align-items: center;
        color: #fff;
        outline: none;
        > svg {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
        &:hover {
          color: #333;
          > svg {
            fill: currentColor;
          }
        }
      }
    }
    .copy-content {
      padding: 8px;
      background: #eee;
      text-align: left;
    }
  }
</style>
