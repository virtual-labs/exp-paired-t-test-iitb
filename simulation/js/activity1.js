let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-28px fb-700">Hypothesis testing: Paired t test</h4>

        <div class="fs-16px">
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='generate_a1_data();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Generated Dataset", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <h3 style='text-align: center;'>Generated X1 and X2</h3>

        <h4>X1 values</h4>
        <div id="x1-table"></div>
        <br>
        <h4>X2 values</h4>
        <div id="x2-table"></div>
        
        <div style="text-align: center;"><button id="a1-nxt2-btn" class="btn btn-info" onclick="activity1_p2();" >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    let header1 = [];
    for (let i = 0; i < n; i++) {
        header1.push(i + 1);
    }
    let div1 = document.getElementById('x1-table');
    let tab = new Show_Table(header1, [x1], div1);
    tab.load_table();
    let header2 = [];
    for (let i = 0; i < n; i++) {
        header2.push(i + 1);
    }
    let div2 = document.getElementById('x2-table');
    let tab2 = new Show_Table(header2, [x2], div2);
    tab2.load_table();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function generate_a1_data() {
    generate_x1_x2();
}
function generate_x1_x2() {
    x1 = [];
    x2 = [];
    for (let i = 0; i < n; i++) {
        let val1 = Math.random() * 40;
        x1.push(val1);
    }
    for (let i = 0; i < n; i++) {
        let val2 = Math.random() * 40;
        x2.push(val2);
    }
    console.log(`n = ${n}`);
    console.log('x1 values =>', x1);
    console.log('x2 values =>', x2);
    calculate_d_bar();
}
function calculate_d_bar() {
    d_bar_values = [];
    sigma_d = 0;
    for (let i = 0; i < x1.length; i++) {
        d_bar_values.push(x2[i] - x1[i]);
        sigma_d += x2[i] - x1[i];
    }
    avg_d = sigma_d / n;
    console.log(`avg_d => ${avg_d}`);
    calculate_std_deviation_of_d();
}
function calculate_std_deviation_of_d() {
    std_dev_d_bar = 0;
    for (let i = 0; i < d_bar_values.length; i++) {
        std_dev_d_bar += (Math.pow((d_bar_values[i] - avg_d), 2));
    }
    std_dev_d_bar = std_dev_d_bar / (n - 1);
    std_dev_d_bar = Math.sqrt(std_dev_d_bar);
    std_dev_d_bar = std_dev_d_bar / Math.sqrt(n);
    console.log(`std(di) / sqrt(n) => ${std_dev_d_bar}`);
    calculate_statistic();
}
function calculate_statistic() {
    statistic_value = avg_d / std_dev_d_bar;
    console.log(statistic_value);
    start_act1();
    return statistic_value;
}
activity1();
//# sourceMappingURL=activity1.js.map