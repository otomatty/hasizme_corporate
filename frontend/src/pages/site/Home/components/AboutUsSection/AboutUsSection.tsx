import SectionTitle from "@/components/site/SectionTitle";
import Container from "@/components/site/Container/Container";

const AboutUsSection = () => {
	return (
		<section className="relative flex flex-col items-center justify-between mb-16 p-4 md:flex-row md:mb-40">
			<Container>
				<img
					src="https://via.placeholder.com/1200x600"
					alt="About Us "
					className="w-full h-auto rounded-lg md:absolute md:left-0 md:w-auto"
				/>

				<div className="w-full bg-gray-50 rounded-lg shadow-md text-left p-4 md:w-1/2 md:p-8 md:relative md:ml-[60%] md:mt-40 md:mr-8">
					<SectionTitle
						id="about-us-title"
						title="私たちについて"
						align="left"
					/>
					<div className="space-y-4 text-lg text-gray-600 leading-relaxed text-justify">
						<p>
							橋爪商事は1928年の創業以来、建設資材や工業資材を提供することで、物流の担い手として、地域に育てられ地域に寄り添って成長してきました。
						</p>
						<p>
							今後、地域社会は人口減少・少子高齢化・地球環境の変化など、これまでの常識が通用しない急激な変化を経験していくことになります。
						</p>
						<p>
							このような不確実な状況の中で、地域社会の「みんな」で持続可能な社会を創るため、中期ミッション&ビジョンである「HASIZME2030」を策定しました。
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default AboutUsSection;
