import clsx from "clsx"
import PropTypes from "prop-types"
import { languages } from "../languages"

export default function Languages({wrongGuessCount}){
    const languageElements = languages.map((lang, index) => {
        const isLanguageLost = index < wrongGuessCount
        return (
            <span className={clsx("chip", isLanguageLost && "lost")}
                key={lang.name} 
                style={
                {
                    backgroundColor: `${lang.backgroundColor}`,
                    color: `${lang.color}`
                }
                }
            >
                {lang.name}
            </span>
        )
    })

   return (
    <section className="language-chips">
        {languageElements}
    </section>)
}

Languages.propTypes = {
    wrongGuessCount: PropTypes.number
}