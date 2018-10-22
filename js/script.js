var Counter = React.createClass({
    
    getDefaultProps() {
        console.log('Tu mozna ustawić propsy dla licznika');
      },
    
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    increment100: function() {
        this.setState({
          counter:this.state.counter + 100
        });
      },

    decrement: function (){
        this.setState({
            counter: this.state.counter -1
        });
    },

    decrement100: function (){
        this.setState({
            counter: this.state.counter -100
        });
    },

    componentWillMount: function() {
        console.log('Przykład ustawienia wartości początkowej licznika');
        let counter;
        this.setState({
          counter: 2
        });
          return this.state.counter
    },

    render: function() {
        return ( 
            React.createElement('div', {className: 'template'},
                React.createElement('div', {className: 'count_btn'},
                    React.createElement('button', {className: 'button_add', onClick: this.increment}, 'Add'),
                    React.createElement('button', {className: 'button_add', onClick: this.increment100}, 'Add_100'),
                    React.createElement('button', {className: 'button_sub', onClick: this.decrement}, 'Sub'),
                    React.createElement('button', {className: 'button_sub', onClick: this.decrement100}, 'Sub_100'),
                ),
                React.createElement('span', {}, '' + this.state.counter),
            )
        )
    },

    componentDidMount: function() {
        console.log('Tu mozna pobrać jakieś dane, załadować dodatkowe biblioteki');
    },

    componentWillReceiveProps: function() {
        console.log('Nowe właściwości dla komponentu / props - Zwracana jest tutaj wartość true/false');
    },

 
    shouldComponentUpdate: function() {
        console.log('czy faktycznie trzeba jeszcze raz przerysować komponent przed render');
        return true;
    },

    componentWillUpdate: function() {
        console.log('Gdy shouldComponentUpdate zwróci wartość true');
    },

    componentDidUpdate: function() {
        console.log('Metoda w której możemy wykonać np. jakieś manipulacje DOM');
    },

});

var counter1 = React.createElement(Counter);
var counter2 = React.createElement(Counter);

var element = React.createElement('div', {}, counter1, counter2);
ReactDOM.render(element, document.getElementById('app'));