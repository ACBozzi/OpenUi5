sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.myorg.project1.controller.MainView", {
            recolheMenu: function(){
                //alert()//parametro pra funçãod de tela
                var page = this.byId("toolPage")//função do controlador pra buscar o elemento do ID
                page.setSideExpanded(!page.getSideExpanded())

            },
            
            link: function(E){
                var botao = E.getSource();
                console.log(botao.data("Key"));
                location.href='#/${key}';
            },

            onUserNamePress: function(E){
                var menu =new sap.m.ActionSheet()
                menu.openBy(E.getSource());
            },

        });
    }
);
