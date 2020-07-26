## Building Process

- Using Geolocation API

  - Get time and physical location (using latitude to decide in which hemisphere)

- Using React Class component

  - Presquisite of using class component

    - Must be javascript class
    - Must extend React.Componet
    - Must define a 'render' method

  - In order to use the state system

        - Only usable with Class component
        - Easy to mix up between props and state system
        - 'State' contains data that directly relate the component I'm working on
        - Using state cause our component to rerender instantly when update
        - State must be initialized
        - ** State must be update by function 'setState'
