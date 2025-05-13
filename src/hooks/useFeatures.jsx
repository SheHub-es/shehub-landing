import { useTranslation } from "react-i18next";
import teams from "@/assets/icons/teams.svg";
import rocket from "@/assets/icons/rocket.svg";
import star from "@/assets/icons/star.svg";
import heart from "@/assets/icons/heart.svg";


export function useFeatures() {
  const { t } = useTranslation();

  return [
    {
      icon: teams,
      title: (
        <>
          {t("feature_1").split("<br/>")[0]}
          <br />
          {t("feature_1").split("<br/>")[1]}
        </>
      ),
    },
    {
      icon: rocket,
      title: t("feature_2"),
    },
    {
      icon: star,
      title: t("feature_3"),
    },
    {
      icon: heart,
      title: t("feature_4"),
    },
  ];
}
