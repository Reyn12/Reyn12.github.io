$(document).ready(function (){
    $("input[type='radio'][name='paymentMethod']").change(function() {
        if ($(this).is(":checked")) {

            $("li.active").removeClass("active")
            $(this).parent('li').addClass("active")

        }
    })

    $("input[type='radio'][name='nominal']").change(function(){
        if($(this).is(":checked")) 
        {
            var id = $("input[name='nominal']:checked").val();

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            })


            $.ajax({
                url : '/checkprice',
                dataType: "JSON",
                type: "GET",
                data: {id:id},
                success: function(response)
                {
                    $.each(response.data, function(i, item) {
                        $('#' + item.payment_method).text(item.total_harga);
                    });
                }
                
            })
        }
    })

    $('#qty').on('keyup change', function() {
            var qty = $('#qty').val();

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            })


            $.ajax({
                url : '/member/checkprice/topup',
                dataType: "JSON",
                type: "GET",
                data: {qty:qty},
                success: function(response)
                {
                    $.each(response.data, function(i, item) {
                        $('#' + item.payment_method).text(item.total_harga);
                    });

                    
                } 
                
            })
    }) 

    $('#submitOrder').on('click', function(){

        if($('input[name="user_id"]').val()){
          var user_id = $('input[name="user_id"]').val();
        }else{
          var user_id = $('select[name="user_id"]').val();
        }
        if($('input[name="server_id"]').val()){
          var server_id = $('input[name="server_id"]').val();
        }else{
          var server_id = $('select[name="server_id"]').val();
        }
        var service_id = $("input[name='nominal']:checked").val();
        var method_id = $("input[name='paymentMethod']:checked").val();
        var phone = $('input[name="phone"]').val();
        var form1 = $('input[name="form1"]').val();
        var form2 = $('input[name="form2"]').val();

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $.ajax({
            url: '/order/confirm/data',
            dataType: 'JSON',
            type: 'POST',
            data:
            {
               user_id : user_id,
               server_id : server_id,
               service_id : service_id,
               method_id: method_id,
               form1: form1,
               form2: form2,
               method_id: method_id,
               phone: phone
            },
            success: function(response)
            {
                if(response.code == 200)
                {
                  if(response.status == 'redirect'){
                    window.location.replace(response.url);
                  }else{
                    

                    if(!$.trim(response.data[0].server_id)){
                        if(!$.trim(response.data[1].nickname)){
                            $('.data_id').html('<input type="hidden" name ="user_id" value="'+response.data[0].user_id+'"><input type="hidden" name ="server_id"><input type="hidden" name ="method_id" value="'+response.data[0].method_id+'"><input type="hidden" name ="service_id" value="'+response.data[0].service_id+'"><input type="hidden" name ="phone" value="'+response.data[0].phone+'">');
                            $('.detail').html('<table class="table table-hover"><tbody><tr><td>User ID</td><td>'+response.data[0].user_id+'</td></tr><tr><td>Metode Pembayaran</td><td>'+response.data[1].pembayaran+'</td></tr><tr><td>Harga</td><td>'+response.data[1].harga+'</td></tr><tr><td>Note</td><td>Harga Sudah Termasuk Biaya Admin</td></tr></tbody></table>');
                            $('#myModal').modal({
                                show: true,
                                keyboard: false,
                                backdrop: 'static',
                              
                            })
                        }else{
                            $('.data_id').html('<input type="hidden" name ="user_id" value="'+response.data[0].user_id+'"><input type="hidden" name ="server_id"><input type="hidden" name ="method_id" value="'+response.data[0].method_id+'"><input type="hidden" name ="service_id" value="'+response.data[0].service_id+'"><input type="hidden" name ="phone" value="'+response.data[0].phone+'">');
                            $('.detail').html('<table class="table table-hover"><tbody><tr><td>Nickname</td><td>'+response.data[1].nickname+'</td></tr><tr><td>User ID</td><td>'+response.data[0].user_id+'</td></tr><tr><td>Metode Pembayaran</td><td>'+response.data[1].pembayaran+'</td></tr><tr><td>Harga</td><td>'+response.data[1].harga+'</td></tr><tr><td>Note</td><td>Harga Sudah Termasuk Biaya Admin</td></tr></tbody></table>');
                            $('#myModal').modal({
                                show: true,
                                keyboard: false,
                                backdrop: 'static',
                              
                            })
                        }
                    }else{
                        if(!$.trim(response.data[1].nickname)){
                            $('.data_id').html('<input type="hidden" name ="user_id" value="'+response.data[0].user_id+'"><input type="hidden" name ="server_id" value="'+response.data[0].server_id+'"><input type="hidden" name ="service_id" value="'+response.data[0].service_id+'"><input type="hidden" name ="method_id" value="'+response.data[0].method_id+'"><input type="hidden" name ="phone" value="'+response.data[0].phone+'">');
                            $('.detail').html('<table class="table table-hover"><tbody><tr><td>User ID</td><td>'+response.data[0].user_id+' ('+response.data[0].server_id+')</td></tr><tr><td>Metode Pembayaran</td><td>'+response.data[1].pembayaran+'</td></tr><tr><td>Harga</td><td>'+response.data[1].harga+'</td></tr><tr><td>Note</td><td>Harga Sudah Termasuk Biaya Admin</td></tr></tbody></table>');
                            $('#myModal').modal({
                                show: true,
                                keyboard: false,
                                backdrop: 'static',
                              
                            })
                        }else{
                            $('.data_id').html('<input type="hidden" name ="user_id" value="'+response.data[0].user_id+'"><input type="hidden" name ="server_id" value="'+response.data[0].server_id+'"><input type="hidden" name ="service_id" value="'+response.data[0].service_id+'"><input type="hidden" name ="method_id" value="'+response.data[0].method_id+'"><input type="hidden" name ="phone" value="'+response.data[0].phone+'">');
                            $('.detail').html('<table class="table table-hover"><tbody><tr><td>Nickname</td><td>'+response.data[1].nickname+'</td></tr><tr><td>User ID</td><td>'+response.data[0].user_id+' ('+response.data[0].server_id+')</td></tr><tr><td>Metode Pembayaran</td><td>'+response.data[1].pembayaran+'</td></tr><tr><td>Harga</td><td>'+response.data[1].harga+'</td></tr><tr><td>Note</td><td>Harga Sudah Termasuk Biaya Admin</td></tr></tbody></table>');
                            $('#myModal').modal({
                                show: true,
                                keyboard: false,
                                backdrop: 'static',
                              
                            })
                        }
                    }
                  
                  }

                }else{
                    Swal.fire({
                        title: response.status,
                        text: response.message,
                        icon: "error",
                    })
                }

            }
        })
    })
})

    function openPaymentDrawer(elem) {
    var $this = $(elem);


    $('.payment-drawwer').not(this).each(function() {
        var $parents = $(this);
        $parents.find('.button-action-payment').slideUp(function() {
            $parents.removeClass('active');
        });

        $parents.find('.short-payment-support-info').find('img').slideDown();
        $parents.find('.short-payment-support-info').find('i').removeClass('fa-chevron-up').addClass(
            'fa-chevron-down');
    });

    var $parents = $this.parents('.child-box');

    if (!$parents.find('.button-action-payment').is(":hidden")) {
        $parents.find('.button-action-payment').slideUp(function() {
            $parents.removeClass('active');
        });

        $parents.find('.short-payment-support-info').find('img').slideDown();
        $parents.find('.short-payment-support-info').find('.fa-chevron-up').removeClass('fa-chevron-up').addClass(
            'fa-chevron-down');

    } else {
        $parents.find('.button-action-payment').slideDown(function() {
            $parents.addClass('active');
        });
        $parents.find('.short-payment-support-info').find('img').slideUp();
        $parents.find('.short-payment-support-info').find('.fa-chevron-down').addClass('fa-chevron-up').removeClass(
            'fa-chevron-down');

    }
}