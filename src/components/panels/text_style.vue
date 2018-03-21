<template>
	<div class="m-text-style">
		<yd-navbar :title="title"
				   :bgcolor="headStyle.bgcolor"
				   :color="headStyle.color"
				   :fontsize="headStyle.title.fontSize">
			<div slot="left" :style="{color: headStyle.color, fontSize:headStyle.fontSize}" @click="back">
				<yd-navbar-back-icon :color="headStyle.color">返回</yd-navbar-back-icon>
			</div>
			<!-- <div slot="right" :style="{color: headStyle.color}">
				
			</div> -->		   	
		</yd-navbar>
		<div>
			<div class="flex font-style">
				<el-select v-model="currentStyle.fontFamily" placeholder="请选择">
				    <el-option
				      v-for="item in styles.fontFamily"
				      :key="item"
				      :label="item"
				      :value="item"
				      :disabled="item == '选择字体'">
				    </el-option>
				    
				</el-select>
				<el-select v-model="currentStyle.fontSize" placeholder="请选择">
				    <el-option
				      v-for="item in styles.fontSize"
				      :key="item"
				      :label="item"
				      :value="item"
				      :disabled="item == '字体大小'">
				    </el-option>
				</el-select>
				<el-select v-model="currentStyle.letterSpacing" placeholder="请选择">
				    <el-option
				      v-for="item in styles.letterSpacing"
				      :key="item"
				      :label="item"
				      :value="item"
				      :disabled="item == '字间距'">
				    </el-option>
				</el-select>
			</div>
			<div class="text-content"
				>
				<span class="text" 
					:style="{
							fontFamily: currentStyle.fontFamily,
							fontSize: currentStyle.fontSize + 'px',
							letterSpacing: currentStyle.letterSpacing + 'px',
							color: currentStyle.color,
							textAlign: currentStyle.textAlign,
							webkitTextStrokeColor: currentStyle.webkitTextStrokeColor,
							webkitTextStrokeWidth: currentStyle.webkitTextStrokeWidth + 'px'
						}">
					嗨披详情页
				</span>
			</div>
			<div class="paragraph-style flex">
				<div class="f-color"
					:class="{active: colorTarget == 'f-color'}"
					@touchstart="pickColorTarget('f-color')">填色</div>
				<div class="b-color"
					:class="{active: colorTarget == 'b-color'}"
					@touchstart="pickColorTarget('b-color')">描边</div>
				<div class="b-color2">描边</div>
				<div class="b-width"><i class="iconfont icon-scale"></i></div>
				<div class="t-align flex">
					<div class="left" @touchstart="setTextAlign('left')"><i class="iconfont icon-align-left"></i></div>
					<div class="center" @touchstart="setTextAlign('center')"><i class="iconfont icon-align-center"></i></div>
					<div class="right" @touchstart="setTextAlign('right')"><i class="iconfont icon-align-right"></i></div>
				</div>
				<div class="l-height">行距<i class="iconfont icon-scale"></i></div>
				<!-- <div class="text-align"></div> -->
			</div>
			<div class="colors">
				<div class="title">主题颜色</div>
				<div class="colors-group main-colors flex">
					<div class="color-item" 
						v-for="color in colors.mainColors"
						:key="color"
						:class="{white: color == '#ffffff'}"
						:style="{
							backgroundColor: color
						}"
						@touchstart="pickColor(color)"></div>
				</div>
				<div class="colors-group flex" 
					v-for="group in colors.otherColors">
					<div class="color-item" 
						v-for="color in group"
						:key="color"
						:class="{white: color == '#ffffff'}"
						:style="{
							backgroundColor: color
						}"
						@touchstart="pickColor(color)"></div>
				</div>
				<div class="title">标准颜色</div>
				<div class="colors-group main-colors flex">
					<div class="color-item" 
						v-for="color in colors.standardColors"
						:key="color"
						:class="{white: color == '#ffffff'}"
						:style="{
							backgroundColor: color
						}"
						@touchstart="pickColor(color)"></div>
				</div>
				<div class="all-colors">
					<div class="flex">
						<div class="icon" @touchstart="openColorPicker">
							<img src="../../assets/images/color_pcketor.png">
						</div>
						<div class="text" @touchstart="openColorPicker">更多颜色</div>
						<div class="right">
							<yd-button type="primary" @touchstart.native="saveStyle()">完成编辑</yd-button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters ,mapMutations } from 'vuex'
import textStyle from './textStyle'
	console.log(textStyle)



	export default {
		data () {
			return {
				title: '应用',
				styles:{
					fontFamily:textStyle.fontFamily,
					fontSize:textStyle.fontSize,
					letterSpacing: textStyle.letterSpacing
				},
				colors:{
					mainColors: textStyle.mainColors,
					otherColors: textStyle.otherColors,
					standardColors: textStyle.standardColors
				},
				currentStyle: {
					fontFamily:'微软雅黑',
					fontSize: 50,
					letterSpacing:0,
					color:'#00000',
					textAlign: 'left',
					webkitTextStrokeColor:'transparent',
					webkitTextStrokeWidth:0
				},
				colorTarget:'f-color',
				editor: null
			}
		},
		computed: {
			headStyle () {
				return this.global.headStyle.black;
			},
			...mapGetters({
				editData: 'getEditData'
				
			})
		},
		methods: {
			init() {
				const editData = this.editData;
				const currentStyle = this.currentStyle
				const editor = this.editor = editData.editModules[editData.moduleIndex].editors[editData.editorIndex];
				for(let key in currentStyle){
					currentStyle[key] = editor[key]
				}

			},
			...mapMutations({
				setEditData: 'setEditData'
			}),
			setTextAlign (align) {
				this.currentStyle.textAlign = align
			},
			pickColor(color) {
				const MAP = {
					'f-color': 'color',
					'b-color': 'webkitTextStrokeColor'
				}
				console.log(color)
				this.currentStyle[MAP[this.colorTarget]] = color

				const dom = document.getElementsByClassName('text-content')[0];
				console.dir(dom)
			},
			pickColorTarget(target){
				this.colorTarget = target;
			},
			back () {
				this.$router.go(-1)
			},
			openColorPicker () {
				// 打开拾色器
				this.$router.push({name:'color_picker'})
			},
			saveStyle () {
				console.log(222)
				const editor = this.editor;
				const currentStyle = this.currentStyle;
				for(let key in currentStyle){
					 editor[key] = currentStyle[key] 
				}

				this.$router.push({name: 'new_user_panel'})
			}
		},
		created() {
			this.init()

			// console.log(this.global)
		}
	}
</script>
<style lang="less" rel="stylesheet/less">
	.m-text-style{
		.font-style{
			padding: 5px;

			.el-select{
				margin: 0 5px;

				.el-input{
					.el-input__inner{
						height: 30px;
						border: 1px solid #605d5a;
					}

					.el-select__caret{
						color: #605d5a
					}
				}
				&:first-child{
					width: 500px;
				}
			}
		}

		.text-content{
			position: relative;
			margin: 0 15px;
			padding: 5px 0 25px;
			border: 1px dashed #ccc;
			
			.text{
				display: block;
				width: 100%;
			}
			&::after{
				content: '效果演示';
				position: absolute;
				left: 0;
				bottom: 5px;
				width: 100%;
				font-size: 12px;
				color: #a4a091;
				text-align: center;
			}
		}

		.paragraph-style{
			padding: 5px;
			justify-content:space-between;

			&>div{
				margin: 0 2px;
				width: 35px;
				height: 35px;
				border: 1px solid #605d5a;
				border-radius: 5px;
				font-size: 15px;
				text-align: center;
				line-height: 35px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;

				&.active{
					color:#fff;
					background-color: #605d5a;
				}

				&.l-height{
					width: 60px;
				}

				&.t-align{

					width: 105px;
					overflow: hidden;

					&>div{
						width: 35px;
						height: 35px;
						border-left: 1px solid #605d5a;
						.iconfont{
							font-size: 28px;
						}
						&:first-child{
							border: none;
						}
					}
				}

				&.b-color2{
					border-style: dashed;
				}
			}

			
		}

		.colors {
			padding: 0 15px;

			.title{
				padding: 5px 0;
				text-align: left;
			}
			.colors-group{
				justify-content:space-between;
				.color-item{
					border: 1px solid transparent;
					width: 30px;
					height: 30px;

					&.white{
						border-color: #605d5a
					}
				}

				&.main-colors{
					margin-bottom: 10px;
				}
			}

			.all-colors{
				margin-top: 30px;
				.flex{
					justify-content: flex-start;
					
					.icon{
						img{
							width: 30px;
							height: 30px;
						}
						
					}
					.text{
						flex:1;
						text-align: left;
						padding-left: 5px;
						font-size: 20px;
					}

					.yd-btn{
						width: 100px;
						height: 50px;
						line-height: 50px;
						font-size: 20px;
						color: #fff;
						border: none;
					    border-radius: 1000px;
						background-color: #ff6699;
					}
				}


			}
		}
	}
</style>