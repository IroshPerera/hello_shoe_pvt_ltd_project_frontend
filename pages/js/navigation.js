navigateToPage('#dashboard-page');
navBarActive('#btn-dashboard');


$('#btn-dashboard').click(function () {
    navBarActive('#btn-dashboard');
    navigateToPage('#dashboard-page');
})


$('#btn-employee').click(function () {
    navBarActive('#btn-employee');
    navigateToPage('#employee-page');
});

$('#btn-register-employee').click(function () {
    clearEmployeeFields();
    navBarActive('#btn-employee');
    navigateToPage('#employee-register-page');
});

$('#btn-emp-home').click(function () {
    navBarActive('#btn-employee');
    navigateToPage('#employee-page');
});

$('#btn-customer').click(function () {

    navBarActive('#btn-customer');
    navigateToPage('#customer-page');
});

$('#btn-register-customer').click(function () {
    clearCustomerFields()
    navBarActive('#btn-customer');
    navigateToPage('#customer-register-page');

});

$('#btn-cust-home').click(function () {
    navBarActive('#btn-customer');
    navigateToPage('#customer-page');
});


$('#btn-supplier').click(function () {

    navBarActive('#btn-supplier');
    navigateToPage('#supplier-page');

});

$('#btn-register-supplier').click(function () {
    clearSupplierFields()
    navBarActive('#btn-supplier');
    navigateToPage('#supplier-register-page');

});

$('#btn-sup-home').click(function () {
    navBarActive('#btn-supplier');
    navigateToPage('#supplier-page');
});
$('#btn-inventory').click(function () {

    navBarActive('#btn-inventory');
    navigateToPage('#inventory-page');
});

$('#btn-add-inventory').click(function () {

    navBarActive('#btn-inventory');
    navigateToPage('#inventory-register-page');
});

$('#btn-size').click(function () {
    navBarActive('#btn-size');
    navigateToPage('#size-page');

});

$('#btn-add-size').click(function () {
    clearSizeFields();
    navBarActive('#btn-size');
    navigateToPage('#size-register-page');

})

$('#btn-size-home').click(function () {
    navBarActive('#btn-size');
    navigateToPage('#size-page');

});


$('#btn-add-branch').click(function () {
    navBarActive('#btn-branch');
    navigateToPage('#branch-register-page');
});

$('#btn-branch').click(function () {
    navBarActive('#btn-branch');
    navigateToPage('#branch-page');
});

function navigateToPage(page) {
    $('#dashboard-page').css('display', 'none');
    $('#employee-page').css('display', 'none');
    $('#employee-register-page').css('display', 'none');
    $('#customer-page').css('display', 'none');
    $('#customer-register-page').css('display', 'none');
    $('#supplier-register-page').css('display', 'none');
    $('#supplier-page').css('display', 'none');
    $('#inventory-page').css('display', 'none');
    $('#inventory-register-page').css('display', 'none');
    $('#size-page').css('display', 'none');
    $('#size-register-page').css('display', 'none');
    $('#branch-register-page').css('display', 'none');
    $('#branch-page').css('display', 'none');

    if (page === '#supplier-page') {
        loadAllSupplier();

    }
    if (page === '#employee-page') {
        loadAllEmployees();
        setEmployeeCounts();
    }
    if (page === '#customer-page') {
        loadAllCustomers();
    }
    if (page === '#size-page') {
        loadAllSizes();
    }


    $(page).css('display', 'block');
}

function navBarActive(page) {
    $('#btn-dashboard').parent().removeClass('active');
    $('#btn-employee').parent().removeClass('active');
    $('#btn-customer').parent().removeClass('active');
    $('#btn-supplier').parent().removeClass('active');
    $('#btn-inventory').parent().removeClass('active');
    $('#btn-size').parent().removeClass('active');
    $('#btn-branch').parent().removeClass('active');

    $(page).parent().addClass('active');
}