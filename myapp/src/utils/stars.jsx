const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
                ★
            </span>
        );
    }

    return <span className="star-rating">{stars}</span>;
};

export default renderStars;