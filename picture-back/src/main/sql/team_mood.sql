-- View: public.team_mood

-- DROP VIEW public.team_mood;

CREATE OR REPLACE VIEW public.team_mood AS
 WITH mood_view AS (
         SELECT mood.id,
            rank() OVER (PARTITION BY mood.picture_user_id ORDER BY mood.mood_date DESC) AS rnk
           FROM mood
        )
 SELECT 1 AS id,
    round(avg(m.mood_value)) AS avg_mood
   FROM mood m
     JOIN mood_view v ON m.id = v.id AND v.rnk = 1;

ALTER TABLE public.team_mood
  OWNER TO postgres;
