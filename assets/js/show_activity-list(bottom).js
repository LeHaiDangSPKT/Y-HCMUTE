import info_activity from '../data/show_activity(bottom).js'

var arrActivity =  Object.values(info_activity())
const app = {
    
    render: function () {
        const html = arrActivity.map((item) => {
        return `
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats recommend">
                <img ${item.img}>
                <div class="sub">
                    <a href="" style="font-weight: 500; color: black;">${item.title}</a>
                    <div>${item.sub}</div>
                </div>
            </div>
        </div>
        `
        })
        document.querySelector('.info_activity').innerHTML = html.join('')
    },

    start: function () {
        this.render();
    }
}
app.start();
