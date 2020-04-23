package com.example.GOP.Controllers;

import com.example.GOP.Entities.ElectionData;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/*@Controller
public class GOPMainController implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/index").setViewName("index");
    }

    @GetMapping("/index")
    public String showForm() {
        return "index";
    }

}*/

@Controller
public class initializationController {

    @RequestMapping("/index")
    public String displayMainPage(Model model) { //mo
        model.addAttribute("message", "Thymeleaf worked!");
        model.addAttribute("objectTest", new ElectionData());
        return "GOP/GUI/HFiles/index";
    }

    @RequestMapping("/hello")
    public String sayHello() {
        return "<h1>hello</h1>";
    }

}


