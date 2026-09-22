CREATE TABLE IF NOT EXISTS meetings (
  id             SERIAL        PRIMARY KEY,
  date           DATE          NOT NULL UNIQUE,
  meeting_type   VARCHAR(20)   NOT NULL
                               CHECK (meeting_type IN
                                 ('testimony','regular','stake','general','special')),
  presiding      VARCHAR(255)  NOT NULL,
  conducting     VARCHAR(255)  NOT NULL,
  announcements  TEXT[]        DEFAULT '{}',
  opening_hymn   JSONB         NOT NULL,
  opening_prayer VARCHAR(255)  NOT NULL,
  ward_business  JSONB         DEFAULT '[]',
  stake_business BOOLEAN       DEFAULT false,
  sacrament_hymn JSONB         NOT NULL,
  speakers       JSONB         DEFAULT '[]',
  closing_hymn   JSONB         NOT NULL,
  closing_prayer VARCHAR(255)  NOT NULL
);


INSERT INTO meetings (
  date, meeting_type, presiding, conducting, announcements,
  opening_hymn, opening_prayer, ward_business, stake_business,
  sacrament_hymn, speakers, closing_hymn, closing_prayer
) VALUES
(
'2026-01-04','testimony','Bishop Thompson','Brother Nakamura',
ARRAY[]::TEXT[],
'{"number":134,"title":"I Believe in Christ"}','Sister Park',
'[]',false,
'{"number":175,"title":"God, Our Father, Hear Us Pray"}',
'[]',
'{"number":219,"title":"Because I Have Been Given Much"}','Brother Alvarez'
),
(
  '2026-01-11','regular','Bishop Thompson','Brother Nakamura',
  ARRAY['Ward temple night: Jan 30'],
  '{"number":2,"title":"The Spirit of God"}','Sister Ramirez',
  '[{"description":"Sustaining of new Sunday School president"}]',true,
  '{"number":169,"title":"In Remembrance of Thy Suffering"}',
  '[{"name":"Sister Chen","topic":"The Sacrament","type":"speaker"},
    {"name":"Brother Osei","topic":"Covenant Keeping","type":"speaker"}]',
  '{"number":31,"title":"O God, Our Help in Ages Past"}','Brother Lewis'
),(
  '2026-01-18','regular','Bishop Thompson','Sister Torres',
  ARRAY['Ministering interviews this week'],
  '{"number":85,"title":"How Firm a Foundation"}','Brother Kim',
  '[{"description":"Release - Sister Martinez - Primary Teacher"},{"description":"Sustain - Sister Agbavor - Primary Teacher"}, {"description":"Sustain - Sister Mukiwa - RS 2nd Counselor"}]',false,
  '{"number":173,"title":"While of These Emblems We Partake"}',
  '[{"name":"Sister Nakamura","topic":"Personal Revelation","type":"speaker"},
    {"name":"Youth Choir","topic":"","type":"musical-number"},
    {"name":"Brother Santos","topic":"Temple Covenants","type":"speaker"}]',
  '{"number":226,"title":"Improve the Shining Moments"}','Sister Jensen'
),
(
  '2026-02-01','regular','Bishop Thompson','Brother Nakamura',
  ARRAY['Ward family history night: Feb 8'],
  '{"number":56,"title":"The Morning Breaks"}','Sister Gomez',
  '[{"description":"Sustain - Brother Wells - Elders Quorum First Counselor"}]',false,
  '{"number":168,"title":"This Is My Beloved Son"}',
  '[{"name":"Brother Patel","topic":"Faith in Christ","type":"speaker"},
    {"name":"Sister Lopez","topic":"Service","type":"speaker"}]',
  '{"number":88,"title":"Ye Elders of Israel"}','Brother Johnson'
),
(
  '2026-02-08','testimony','Bishop Thompson','Sister Torres',
  ARRAY['Young women devotional this Friday'],
  '{"number":121,"title":"I Am a Child of God"}','Brother Allen',
  '[{"description":"Ward boundary update"}]',false,
  '{"number":154,"title":"Sweet Hour of Prayer"}',
  '[{"name":"Brother Nguyen","topic":"Repentance","type":"speaker"},
    {"name":"Sister Burke","topic":"Prayer","type":"speaker"},
    {"name":"Brother Davis","topic":"Missionary Service","type":"speaker"}]',
  '{"number":193,"title":"Let Us All Press On"}','Sister Morales'
),
(
  '2026-02-15','regular','Bishop Thompson','Brother Lewis',
  ARRAY['Family history workshop Saturday'],
  '{"number":39,"title":"We Thank Thee, O God, for a Prophet"}','Sister Ward',
  '[{"description":"Sustain - Sister Hall - Relief Society President"}]',true,
  '{"number":172,"title":"Tis Sweet to Sing the Matchless Love"}',
  '[{"name":"Brother Turner","topic":"Temple Work","type":"speaker"},
    {"name":"Primary Children","topic":"","type":"musical-number"}]',
  '{"number":147,"title":"Jesus, Lover of My Soul"}','Brother Reed'
),
(
  '2026-02-22','stake','President Gimenez','Brother Nakamura',
  ARRAY['Stake youth conference registration open'],
  '{"number":102,"title":"My Redeemer Lives"}','Brother Flores',
  '[{"description":"Stake high council release"},{"description":"Sustain - Brother Hart - Stake Young Men President"}]',true,
  '{"number":189,"title":"As Now We Take the Sacrament"}',
  '[{"name":"President Gimenez","topic":"Covenants","type":"speaker"},
    {"name":"Sister Parker","topic":"Joy in the Gospel","type":"speaker"}]',
  '{"number":60,"title":"Press Forward, Saints"}','Sister Alvarez'
),
(
  '2026-03-01','regular','Bishop Thompson','Sister Jensen',
  ARRAY['Ward cleanup next Saturday'],
  '{"number":14,"title":"Come, Follow Me"}','Brother Scott',
  '[{"description":"Sustain - Sister Okafor - Primary 1st Counselor"}]',false,
  '{"number":164,"title":"Behold the Great Redeemer Die"}',
  '[{"name":"Brother Ortiz","topic":"Scripture Study","type":"speaker"},
    {"name":"Brother Price","topic":"Service to Neighbors","type":"speaker"}]',
  '{"number":198,"title":"The Lord Is My Light"}','Brother Adams'
),
(
  '2026-03-08','regular','Bishop Thompson','Brother Nakamura',
  ARRAY['Welcome new family to ward'],
  '{"number":30,"title":"I Saw a Mighty Angel"}','Sister Reynolds',
  '[{"description":"Release - Brother Singh - Ward Clerk"},{"description":"Sustain - Sister Harper - Ward Clerk"}]',false,
  '{"number":177,"title":"How Great the Wisdom and the Love"}',
  '[{"name":"Sister Bennett","topic":"The Atonement","type":"speaker"},
    {"name":"Brother Carter","topic":"Family History","type":"speaker"},
    {"name":"Youth Choir","topic":"","type":"musical-number"}]',
  '{"number":214,"title":"I Know That My Redeemer Lives"}','Sister Long'
),
(
  '2026-03-15','testimony','Bishop Thompson','Sister Torres',
  ARRAY['Ward council meeting Tuesday'],
  '{"number":5,"title":"High on the Mountain Top"}','Brother Mills',
  '[{"description":"Sustain - Sister Cole - Primary Secretary"}]',false,
  '{"number":182,"title":"O Lord, My God"}',
  '[{"name":"Sister Kumar","topic":"Grace and Mercy","type":"speaker"},
    {"name":"Brother Hall","topic":"Forgiveness","type":"speaker"}]',
  '{"number":207,"title":"The Spirit of God Like a Fire Is Burning"}','Brother Walker'
),




