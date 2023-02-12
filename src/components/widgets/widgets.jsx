const Widget = (props) => {

    const { name } = props;

    return (<div className="widgets-container--item">Ich bin ein Widget namens: {name ?? 'unbekannt'}</div>)
}

export default Widget;