modules = {
    application {
        resource url:'js/application.js'
    }
    test_dialog {
        dependsOn 'jquery, jquery-ui'
        resource url:'css/testDialog.css'
        resource url:'js/testDialog.js'
    }
}