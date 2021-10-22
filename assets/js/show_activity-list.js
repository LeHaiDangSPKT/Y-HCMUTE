import show_ac from '../data/show_activity.js'

var arrActivity =  Object.values(show_ac())
const app = {
    
    render: function () {
        const html = arrActivity.map((item, index) => {
        return `
            <tr data-index="${index}">
                <td>${index+1}</td>
                <td>
                   <a href = "" style = "width: 800px; max-width: 800px;  color: black; overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;"> ${item.fullname} </a>
                </td>
                <td>${item.organize}</td>
                <td style="font-weight: 700;">${item.time}</td>
            </tr>
        `
        })
        document.querySelector('.list_activity').innerHTML = html.join('')
    },

    start: function () {
        this.render();
    }
}
app.start();
