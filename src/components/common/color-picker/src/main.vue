<template>
  <div
    :class="[
      'el-color-picker',
      colorDisabled ? 'is-disabled' : '',
      colorSize ? `el-color-picker--${ colorSize }` : ''
    ]"
    v-clickoutside="hide">
    <div class="el-color-picker__mask" v-if="colorDisabled"></div>
    <div class="el-color-picker__trigger">
      <span class="el-color-picker__color" :class="{ 'is-alpha': showAlpha }">
        <span class="el-color-picker__color-inner"
          :style="{
            backgroundColor: displayedColor
          }"></span>
        <span class="el-color-picker__empty el-icon-close" v-if="!value && !showPanelColor"></span>
      </span>
      <span class="el-color-picker__icon el-icon-arrow-down" v-show="value || showPanelColor"></span>
    </div>
    <picker-dropdown
       ref="dropdown"
       :class="['el-color-picker__panel', popperClass || '']"
       v-model="showPicker"
       @pick="confirmValue"
       @clear="clearValue"
       :color="color"
       :show-alpha="showAlpha">
    </picker-dropdown>
  </div>
</template>

<script>
  import Color from './color';
  import PickerDropdown from './components/picker-dropdown.vue';
  import Clickoutside from 'element-ui/src/utils/clickoutside';

  export default {
    name: 'ElColorPicker',

    props: {
      value: String,
      showAlpha: Boolean,
      colorFormat: String,
      disabled: Boolean,
      size: String,
      popperClass: String
    },

    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },

    directives: { Clickoutside },

    computed: {
      displayedColor() {
        if (!this.value && !this.showPanelColor) {
          return 'transparent';
        } else {
          const { r, g, b } = this.color.toRgb();
          return this.showAlpha
            ? `rgba(${ r }, ${ g }, ${ b }, ${ this.color.get('alpha') / 100 })`
            : `rgb(${ r }, ${ g }, ${ b })`;
        }
      },

      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },

      colorSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      },

      colorDisabled() {
        return this.disabled || (this.elForm || {}).disabled;
      }
    },

    watch: {
      value(val) {
        if (!val) {
          this.showPanelColor = false;
        } else if (val && val !== this.color.value) {
          this.color.fromString(val);
        }
      },
      color: {
        deep: true,
        handler() {
          this.showPanelColor = true;
        }
      },
      displayedColor(val) {
        this.$emit('active-change', val);
      }
    },

    methods: {
      handleTrigger() {
        if (this.colorDisabled) return;
        this.showPicker = !this.showPicker;
      },
      confirmValue(value) {
        this.$emit('input', this.color.value);
        this.$emit('change', this.color.value);
        this.showPicker = true;
      },
      clearValue() {
        this.$emit('input', null);
        this.$emit('change', null);
        this.showPanelColor = false;
        this.showPicker = true;
        this.resetColor();
      },
      hide() {
        this.showPicker = true;
        this.resetColor();
      },
      resetColor() {
        this.$nextTick(_ => {
          if (this.value) {
            this.color.fromString(this.value);
          } else {
            this.showPanelColor = false;
          }
        });
      }
    },

    mounted() {
      const value = this.value;
      if (value) {
        this.color.fromString(value);
      }
      this.popperElm = this.$refs.dropdown.$el;
    },

    data() {
      const color = new Color({
        enableAlpha: this.showAlpha,
        format: this.colorFormat
      });
      return {
        color,
        showPicker: true,
        showPanelColor: false
      };
    },

    components: {
      PickerDropdown
    }
  };
</script>
<style lang="less" rel="stylesheet/less">
  .el-color-picker{
   

    .el-color-picker__panel{
      position: static;

      .el-color-hue-slider{
        width: 100%;

        .el-color-hue-slider__thumb{
          position: absolute;
          cursor: pointer;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          border-radius: 1px;
          background: #fff;
          border: 1px solid #f0f0f0;
          -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, .6);
          box-shadow: 0 0 2px rgba(0, 0, 0, .6);
          z-index: 1;
        }
      }

      .el-color-svpanel{
        margin-top: 15px;
        width: 100%;
        .el-color-svpanel__cursor{
          div{
            margin-top: -3px;
            margin-left: -3px;
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }
  
</style>