var user={
    login:function(data,success){
        $.ajax({
            type: 'post',
            url: LOGIN,
            data: {
                user_name: data.user_name,
                password: data.password
            },
            success: success
        })
    }
}