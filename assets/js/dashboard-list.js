import list_school from '../data/dashboard_school.js'
import list_clb from '../data/dashboard_clb.js'

var arrSchool =  Object.values(list_school())
var arrCLB =  Object.values(list_clb())

const app = {
    
    render_school: function () {
            const html = arrSchool.map((item, index) => {
            return `
                <tr data-index="${index}">
                    <td>${index+1}</td>
                    <td style="width: 280px; max-width: 280px;">
                        <a href="" style="color: #333; overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;">${item.fullname}</a>
                    </td>
                    <td>${Number(item.quantity)}</td>
                    <td>${item.organize}</td>
                </tr>
            `
        })
        document.querySelector('.list_activity_school').innerHTML = html.join('')
    },
    
    render_clb: function () {
        
        const html = arrCLB.map((item, index) => {
            return `
                <tr data-index="${index}">
                    <td>${index+1}</td>
                    <td style="width: 280px; max-width: 280px;">
                        <a href="" style="color: #333; overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;">${item.fullname}</a>
                    </td>
                    <td>${item.quantity}</td>
                    <td>${item.organize}</td>
                </tr>
            `
        })
        document.querySelector('.list_activity_clb').innerHTML = html.join('')
    },
    sum_activity: function() {
        document.querySelector('.car-title-activity').innerHTML = arrCLB.length + arrSchool.length;
    },
    sum_activity_school: function() {
        document.querySelector('.car-title-activity-school').innerHTML = arrSchool.length;
    },
    sum_activity_clb: function() {
        document.querySelector('.car-title-activity-clb').innerHTML = arrCLB.length;
    },
    sum_student: function() {
        var sum = 0;
        for (var i=0; i<arrCLB.length; i++) {
            sum+=Number(arrCLB[i].quantity);
        }
        for (var i=0; i<arrSchool.length; i++) {
            sum+=Number(arrSchool[i].quantity);
        }
        document.querySelector('.card-title-student').innerHTML = sum;
    },
    start: function () {
        this.render_clb();
        this.render_school()
        this.sum_activity();
        this.sum_activity_school();
        this.sum_activity_clb();
        this.sum_student();
    }
}
app.start();
