// let temp: number[][]=  [];
function activity1_p2() {
    let btn_txt = get_collapse_btn_text('Table and Summation', 'div-step-tb');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-step-tb'><h4 class='center-text fs-20px'>Calculate: </h4> <br>


    <div id="verify-a1p2-tab" >

        <br>

        <div id='tb-box2'></div>
        <br><br>

        <br>
        <div style='text-align: center;'><button style='display: none;' id='p2-btn' onclick='activity1_p3();' class='btn btn-info'>Next</button></div> 
    </div>
    </div>`;
    let header = [
        '<span>$$ Iteration $$</span>',
        '<span>$$ x_1 $$</span>',
        "<span>$$ x_2 $$</span>",
        "<span>$$ d = x_2 - x_1 $$</span>",
        "<span>$$ d - \\overline{d} $$</span>",
        "<span>$$ (d - \\overline{d})^2 $$</span>"
    ];
    table_data = [];
    for (let i = 0; i < x1.length; i++) {
        table_data.push([i + 1, x1[i], x2[i], x2[i] - x1[i], (x2[i] - x1[i]) - avg_d, (Math.pow(((x2[i] - x1[i]) - avg_d), 2))]);
    }
    console.log(table_data);
    let vc = [[3, 4, 5], [3, 4, 5]]; // verify column index
    //let vv = [temp[0][2], temp[0][3], temp[0][4], temp[0][5]];  // verify values
    let tb_box = document.getElementById('tb-box2');
    let new_table = new Verify_Rows_Cols_6_decimal_places(header, table_data, [0, 1], vc, '', tb_box, true, true, render_std_d_calculations);
    new_table.load_table();
    let tab_ele = new_table.get_table_element();
    tab_ele.style.fontSize = "16px";
    hide_all_steps();
    setTimeout(() => { show_step('div-step-tb'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function render_std_d_calculations() {
    let btn_txt = get_collapse_btn_text('Calculate Standard Deviation of d', 'div-step-d');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-step-d'><h4 class='center-text fs-20px'>Calculate: </h4> <br>

        <div class="col">

            <div class="row">
                <div class="col-md-6" style="text-align: center;"><span>$$ \\overline{d} = \\frac{\\Sigma d_i}{n} \\ = \\ $$</span></div>
                <div class="col-md-6"><input class="form-control mt-3" id='avg-d-inp'><span style='display: none;' id='dsp-p2-1'></span></div>
            </div>

            <div class="row"> 
                <div class="col-md-6" style="text-align: center;"><span>$$ Std. \\ deviation \\ of \\ d \\ = \\ $$</span></div>
                <div class="col-md-6"><input class="form-control mt-3" id='std-d-inp'><span style='display: none;' id='dsp-p2-2'></span></div>
            </div>

            <div class="row">
                <div class="col-md-6" style="text-align: center;"><span>$$ Std. \\ deviation \\ of \\ \\overline{d} = \\ \\frac{(Std. \\ deviation \\ of \\ d)}{\\sqrt{n}} \\ = \\ $$</span></div>
                <div class="col-md-6"><input class="form-control mt-3" id='std-d-bar-inp'><span style='display: none;' id='dsp-p2-3'></span></div>
            </div>

            <div style='text-align: center;' id='a1p2-btn-2'><button class="btn btn-info" onclick='verify_sum();'>Verify</button></div>

        </div>

    </div>`;
    hide_all_steps();
    setTimeout(() => { show_step('div-step-d'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//render_std_d_calculations();
function verify_sum() {
    let next_btn = document.getElementById('a1p2-btn-2');
    let val1 = document.getElementById('avg-d-inp');
    let val2 = document.getElementById('std-d-inp');
    let val3 = document.getElementById('std-d-bar-inp');
    let sp1 = document.getElementById('dsp-p2-1');
    let sp2 = document.getElementById('dsp-p2-2');
    let sp3 = document.getElementById('dsp-p2-3');
    console.log(avg_d, std_dev_d_bar * Math.sqrt(n), std_dev_d_bar);
    if (!verify_values(parseFloat(val1.value), avg_d)) {
        alert('d bar value is incorrect check again');
        return;
    }
    if (!verify_values(parseFloat(val2.value), std_dev_d_bar * Math.sqrt(n))) {
        alert('std deviation of d is incorrect check again');
        return;
    }
    if (!verify_values(parseFloat(val3.value), std_dev_d_bar)) {
        alert('std deviation of d bar is incorrect check again');
        return;
    }
    next_btn.remove();
    val1.remove();
    val2.remove();
    val3.remove();
    sp1.innerText = avg_d.toFixed(5);
    sp2.innerText = (std_dev_d_bar * Math.sqrt(n)).toFixed(5);
    sp3.innerText = std_dev_d_bar.toFixed(5);
    sp1.style.display = 'block';
    sp2.style.display = 'block';
    sp3.style.display = 'block';
    alert('Entered Values are correct');
    render_t_table();
    //activity1_p3();
}
function render_t_table() {
    let btn_txt = get_collapse_btn_text('t distribution table', 'div-step-tb2');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-step-tb2'><h4 class='center-text fs-20px'>t - table</h4> <br>


    <div id="verify-a1p2-tab" >

        <br>

        <div id='tb-box3'></div>
        <br><br>

        <p>We are taking <span style='display: inline-block;'>$$ \\alpha \\ = \\ 0.05 $$</span></p>

        <br>
        <div style='text-align: center;'><button id='p25-btn' onclick='verify_threshold_div();' class='btn btn-info'>Next</button></div> 
    </div>
    </div>`;
    let header = [
        '<span>$$ df $$</span>',
        '<span>$$ 0.1 $$</span>',
        "<span>$$ 0.05 $$</span>",
        '<span>$$ 0.025 $$</span>',
        "<span>$$ 0.01 $$</span>",
        "<span>$$ 0.005 $$</span>",
        "<span>$$ 0.001 $$</span>",
        "<span>$$ 0.0005 $$</span>"
    ];
    let t_table_array = [];
    let all_keys = Object.keys(t_distribution_data);
    for (let i = 0; i < all_keys.length; i++) {
        t_table_array.push([
            all_keys[i],
            (t_distribution_data[all_keys[i]][0]["0.1"]).toFixed(3),
            (t_distribution_data[all_keys[i]][0]["0.05"]).toFixed(3),
            (t_distribution_data[all_keys[i]][0]["0.025"]).toFixed(3),
            (t_distribution_data[all_keys[i]][0]["0.01"]).toFixed(3),
            (t_distribution_data[all_keys[i]][0]["0.005"]).toFixed(3),
            (t_distribution_data[all_keys[i]][0]["0.001"]).toFixed(3),
            (t_distribution_data[all_keys[i]][0]["0.005"]).toFixed(3)
        ]);
    }
    console.log(t_table_array);
    let tb_box = document.getElementById('tb-box3');
    let new_table = new Display_Table(header, t_table_array, tb_box);
    new_table.load_table();
    hide_all_steps();
    setTimeout(() => { show_step('div-step-tb2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_threshold_div() {
    let btn_txt = get_collapse_btn_text('t distribution table', 'div-step-tn');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-step-tn'><h4 class='center-text fs-20px'>t - table</h4> <br>


    <div class="col">

        <div class="row">
            <div class="col-md-6" style="text-align: center;"><span>$$ t_{(2n-2, 1 - \\frac{\\alpha}{2})}  \\ = \\ $$</span></div>
            <div class="col-md-6"><input class="form-control mt-3" id='tl-inp'><span style='display: none;' id='dsp-tl'></span></div>
        </div>

        <div class="row"> 
            <div class="col-md-6" style="text-align: center;"><span>$$ t_{(2n-2, \\frac{\\alpha}{2})} \\ = \\ $$</span></div>
            <div class="col-md-6"><input class="form-control mt-3" id='tu-inp'><span style='display: none;' id='dsp-tu'></span></div>
        </div>

        <div style='text-align: center;' id='a1p25-btn-1'><button class="btn btn-info" onclick='verify_t_vals();'>Verify</button></div>

    </div>
    </div>`;
    hide_all_steps();
    setTimeout(() => { show_step('div-step-tn'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    test_hypothesis();
}
function test_hypothesis() {
    lower_t_bound = 0;
    upper_t_bound = 0;
    //generate upper and lower bound (thresholds)
    let ind = 2 * n - 2;
    if (t_distribution_data[ind.toString()] == undefined) {
        let x1 = 0;
        let x2 = 0;
        let y1 = 0;
        let y2 = 0;
        let keys = Object.keys(t_distribution_data);
        for (let i = 0; i < keys.length - 2; i++) {
            let lv = parseInt(keys[i]);
            let gv = parseInt(keys[i + 1]);
            if (ind > lv && ind < gv) {
                x1 = parseInt(keys[i]);
                x2 = parseInt(keys[i + 1]);
                y1 = t_distribution_data[keys[i]][0]["0.025"];
                y2 = t_distribution_data[keys[i + 1]][0]["0.025"];
                console.log('Applying extrapolation...');
                upper_t_bound = extrapolate(x1, x2, y1, y2, ind);
                lower_t_bound = -upper_t_bound;
                console.log(`threshold values => (${lower_t_bound}, ${upper_t_bound})`);
                break;
            }
        }
    }
    else {
        upper_t_bound = t_distribution_data[ind.toString()][0]["0.025"];
        lower_t_bound = -upper_t_bound;
        console.log(`threshold values => (${lower_t_bound}, ${upper_t_bound})`);
    }
    //compare the statistical value with upper and lower values
    if (statistic_value >= lower_t_bound && statistic_value <= upper_t_bound) {
        hypothesis_passed = 2;
    }
    else {
        hypothesis_passed = 1;
    }
}
function verify_t_vals() {
    let next_btn = document.getElementById('a1p25-btn-1');
    let val1 = document.getElementById('tl-inp');
    let val2 = document.getElementById('tu-inp');
    let sp1 = document.getElementById('dsp-tl');
    let sp2 = document.getElementById('dsp-tu');
    console.log(lower_t_bound, upper_t_bound);
    if (!verify_values(parseFloat(val1.value), lower_t_bound)) {
        alert('t(2n-2, 1 - alpha/2) is incorrect check again');
        return;
    }
    if (!verify_values(parseFloat(val2.value), upper_t_bound)) {
        alert('t(2n-2, alpha/2) is incorrect check again');
        return;
    }
    next_btn.remove();
    val1.remove();
    val2.remove();
    sp1.innerText = avg_d.toFixed(5);
    sp2.innerText = (std_dev_d_bar * Math.sqrt(n)).toFixed(5);
    sp1.style.display = 'block';
    sp2.style.display = 'block';
    alert('Entered Values are correct');
    // render_t_table()
    //activity1_p3();
    activity1_p3();
}
//# sourceMappingURL=activity1_p2.js.map