export class LevelConfig {
    static MAX_EXPERIENCE = 30;
    static MIN_EXPERIENCE = 0;
    static LEVELS_BY_EXPERIENCE = [0, 5, 10, 19, 30];

    public static getLevelFromExperience(experience: number) {
        const level = this.LEVELS_BY_EXPERIENCE.findIndex(
            (v) => v === experience
        );

        return level >= 0 ? level + 1 : undefined;
    }
}