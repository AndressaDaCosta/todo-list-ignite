import { AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { RiGithubLine } from 'react-icons/ri'

import styles from './Footer.module.css'

export function Footer() {
	return (
		<footer className={styles.footer}>
			<section>
				<ul>
					<li>
						<a
							href="https://www.linkedin.com/in/andressa-da-costa"
							target="_blank">
							<AiOutlineLinkedin
								className={styles.svg}
								size={25}
							/>
						</a>
					</li>
					<li>
						<a
							href="https://github.com/AndressaDaCosta"
							target="_blank">
							<RiGithubLine size={25} />
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/andressacostaaaaaa/"
							target="_blank">
							<AiOutlineInstagram size={25} />
						</a>
					</li>
				</ul>
			</section>
			<section>
				<p>Desenvolvido por Andressa Da Costa</p>
			</section>
		</footer>
	)
}
