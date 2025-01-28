function activity1_p3() {
    let btn_txt = get_collapse_btn_text('Calculate statistic value', 'a1-p3-mdiv');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='a1-p3-mdiv'><h4 class='center-text fs-20px'>Calculate Statistic </h4> <br>

        <div class="col">

            <div class="row">
                <div class="col-md-6" style="text-align: center;"><span>$$ 
                \\frac{\\overline{d}}{Std. \\ deviation \\ of \\ \\overline{d}} \\ = \\ \\frac{\\overline{d} * \\sqrt{n}}{Std. \\ deviation \\ of \\ d_i}  \\ = \\ $$
                </span></div>
                <div class="col-md-6"><input class="form-control mt-3" id='st-inp'><span style='display: none;' id='dsp-st'></span></div>
            </div>



            <div style='text-align: center;' id='a1p3-btn-1'><button class="btn btn-info" onclick='verify_st();'>Verify</button></div>

        </div>

    </div>`;
    hide_all_steps();
    setTimeout(() => { show_step('a1-p3-mdiv'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_st() {
    let next_btn = document.getElementById('a1p3-btn-1');
    let val1 = document.getElementById('st-inp');
    let sp1 = document.getElementById('dsp-st');
    console.log(statistic_value);
    if (!verify_values(parseFloat(val1.value), statistic_value)) {
        alert('calculated statistic value is incorrect check again!!');
        return;
    }
    next_btn.remove();
    val1.remove();
    sp1.innerText = statistic_value.toFixed(5);
    sp1.style.display = 'block';
    alert('Entered Value is correct');
    //test_hypothesis()
    activity1_p4();
}
//activity1_p3();
//# sourceMappingURL=activity1_p3.js.map