export default {
    state: {
        // тут хранение
        category: [],
        subCategory: [],
        products: [],
    },
    actions: {
        // тут связь с беком или разное изменение чего-то
        async fetchPosts({commit}) {
            const res = await fetch("http://test1.web-gu.ru");
            const data = await res.json();
            let category = data.filter(p => p.parent_id === -1)
            let subCategory = []
            category.forEach(item => {
            subCategory = [...subCategory, ...data.filter(p => p.parent_id === item.id)]
            })
            let products = []
            subCategory.forEach(item => {
                products = [...products, ...data.filter(p => p.parent_id === item.id)]
            })

            console.log(category)
            console.log(subCategory)
            console.log(products)

            commit('setCategory', category)
            commit('setSubCategory', subCategory)
            commit('setProducts', products)
        }
    },
    mutations: {
        //  тут изменение state

        setCategory(state, category) {
            state.category = category
        },
        setSubCategory(state, subCategory) {
            state.subCategory = subCategory
        },
        setProducts(state, products) {
            state.products = products
        }
    },
    getters: {
        //тут возвращение данных в компонент

        getCategory(state) {
            return state.category
        },
        getSubCategory(state) {
            return state.subCategory
        },
        getProducts(state) {
            return state.products
        },
    },
}
