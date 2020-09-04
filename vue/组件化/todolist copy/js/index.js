
function getLoca() {
    return (localStorage.getItem('todos') != null) ? JSON.parse(localStorage.getItem('todos')) : []
}
const bus = new Vue();
Vue.directive('foucs', {
    inserted(el) {
        el.focus()
    }
})
//头部
Vue.component('Top', {
    template: '#top',
    methods: {
        changeMask() {
            bus.$emit('changeMask')
        }
    }
})
// 内容
Vue.component('Matter', {
    template: '#matter',
    data() {
        return {
            todolist: getLoca(),
            newList: [],
            type: 'all'
        }
    },
    methods: {
        changeFlag(e, id) {
            // this.todolist[index].flag=!this.todolist[index].flag;
            this.todolist.forEach(item => {
                if (item.id == id) {
                    item.flag = !item.flag
                }
            })
            this.setLoca()
        }, del(e, id) {
            // this.todolist.splice(index,1)
            this.todolist.forEach((item, index) => {
                if (item.id == id) {
                    this.todolist.splice(index, 1)
                }
            })
            this.setLoca()
        }, setLoca() {
            localStorage.setItem('todos', JSON.stringify(this.todolist))
        }
    },
    mounted() {
        bus.$on('nr', (centent) => {
            this.todolist.unshift({
                dask: centent,
                flag: false,
                id: this.todolist.length,
            })
        }),
        bus.$on('changeType', (type) => {
                this.type = type
            })
    },
    computed: {
        newTodo() {
            switch (this.type) {
                case 'all':
                    //排序 未完成的在上面
                    // 完成的在下面
                    this.todolist = this.todolist.filter(item => !item.flag).concat(this.todolist.filter(item => item.flag));
                    return this.todolist;
                    break;
                case 'wwc':
                    return this.todolist.filter(item => !item.flag)
                    break;
                case 'ywc':
                    return this.todolist.filter(item => item.flag)
                    break;
            }
        }
    }
})
// 选项卡
Vue.component('TabBar', {
    template: '#tabBar',
    data() {
        return {
            type: 'all',
            tabBars: [{ type: 'all', options: '全部' }, { type: 'ywc', options: '已完成' }, { type: 'wwc', options: '未完成' }
            ],
        }
    },
    props: [],
    methods: {
        change($event, type) {
            this.type = type;
            bus.$emit('changeType', this.type)
        }
    }
})
//遮罩层
Vue.component('Masks', {
    template: '#masks',
    data() {
        return {
            maskFlag: false,
            content: '',
        }
    },
    props: [],
    methods: {
        submit() {
            bus.$emit('nr', this.content)
            this.content = '';
            this.maskFlag = !this.maskFlag;
        },
        quxiao() {
            this.maskFlag = !this.maskFlag;
        }
    },
    mounted() {
        bus.$on('changeMask', () => {
            this.maskFlag = !this.maskFlag
        })
    }
})

new Vue({
    el: '#app'
})