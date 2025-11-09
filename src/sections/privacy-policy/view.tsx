
import React from 'react'
import { Box, Container, Typography } from '@mui/material'

export default function PrivacyPolicyView() {
    return (
        <Container maxWidth="lg" sx={{ mt: 3 }}>
            <Box sx={{ py: 5 }}>
                <Typography variant='h4' sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}>
                    اتفاقية الشروط والأحكام وسياسة الخصوصية
                </Typography>

                <Box sx={{ textAlign: 'right', lineHeight: 2, direction: 'rtl' }}>

                    {/* البند الأول: تمهيد */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الأول: تمهيد
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        مرحباً بكم في استحواذ (Acquisition) المنصة الأمثل التي تتيح لكم طرح الأعمال التجارية وبيعها أو شرائها بسهولة ووضوح،
                        عبر تجربة رقمية فريدة تجمع بين البساطة والاحترافية والشفافية. تمكن المنصة رواد الأعمال وأصحاب المشاريع من عرض
                        مشاريعهم والتواصل المباشر مع المشترين المحتملين بقوة وسرعة، من خلال نظام متكامل لإدارة العروض والتفاوض والتوثيق الإلكتروني.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        تعمل استحواذ على تبسيط خطوات طرح المشاريع وإدارة المفاوضات وتبادل المعلومات داخل بيئة رقمية منظمة وآمنة تضمن
                        حماية الخصوصية وسرية البيانات. كما توفر المنصة أدوات حديثة مثل خدمة الإدراج السهل، التوقيع الإلكتروني، اتفاقيات
                        عدم الإفصاح (NDA)، والإعلانات المعيارية لزيادة الوصول والفرص الاستثمارية.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        وتهدف استحواذ إلى تمكين رواد الأعمال والمشاريع الصغيرة والمتوسطة من توسيع آفاقهم الاستثمارية وبناء جسور الثقة
                        بين البائعين والمشترين، من خلال تقنية متقدمة.
                    </Typography>

                    {/* البند الثاني: التعريفات */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الثاني: التعريفات
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        يقصد بالكلمات والعبارات الآتية حيثما وردت في هذه الاتفاقية كما هو موضح في هذا البند ما لم يقتض سياق النص خلاف ذلك:
                    </Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>المنصة:</strong> تطبيق أو موقع استحواذ المملوك من شركة منصة استحواذ الرقمية</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>البيانات الشخصية:</strong> أي معلومات تتعلق بالشخص الطبيعي أو الاعتباري والتي يتم جمعها أو معالجتها</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>المعلومات المالية والتجارية:</strong> ما يتطلبه تنفيذ الخدمات المطلوبة مثل تاريخ المعاملات، الإفصاح المالي</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>أيام العمل:</strong> يوم من أيام العمل الفعلية من الأحد إلى الخميس في المملكة العربية السعودية</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>المستخدم:</strong> أي شخص طبيعي أو اعتباري يقوم بالدخول على المنصة أو يستخدمها</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>الاستخدام:</strong> الدخول إلى المنصة أو الاستفادة من أي خدمة أو ميزة تقدمها</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>النزاعات:</strong> أي خلافات، أو دعاوى قضائية، أو منازعات بين العملاء والمنصة</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>رسوم الاشتراك:</strong> مبلغ يلتزم المستخدم بدفعه مقابل الاستفادة من خدمات المنصة</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>المحتوى:</strong> جميع النصوص، الصور، الرسوم البيانية، الفيديوهات، الملفات الصوتية</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>الحساب:</strong> الملف الشخصي للمستخدم المسجل على المنصة</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>الاتفاقية:</strong> الشروط والأحكام وسياسة الخصوصية</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>الأنظمة المعمول بها:</strong> جميع القوانين واللوائح النافذة في المملكة العربية السعودية</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>المشتري:</strong> المستخدم الذي يسعى لشراء عمل تجاري معروض على المنصة</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>البائع:</strong> المستخدم الذي يعرض عمله التجاري للبيع على المنصة</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>رسوم النجاح/العمولة:</strong> العمولة المستحقة للشركة عند إتمام الصفقة (5% من إجمالي قيمة الصفقة)</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>المعلومات السرية:</strong> جميع المعلومات غير العامة التي يتم تبادلها بين المستخدمين</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>الملكية الفكرية:</strong> جميع حقوق العلامات التجارية والأسماء التجارية وحقوق النشر</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>الظروف الطارئة:</strong> حوادث استثنائية عامة خارجة عن إرادة الأطراف</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>القوة القاهرة:</strong> أي أعمال أو أحداث خارجة عن سيطرة المنصة المعقولة</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>الفحص الذاتي للجهالة:</strong> الإجراءات التي يقوم بها المشتري للتحقق من الوضع المالي والقانوني</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}><strong>خدمة الضمان:</strong> خدمة مالية اختيارية يتم من خلالها الاحتفاظ بالمبالغ لدى طرف ثالث موثوق</Typography>
                    </Box>

                    {/* البند الثالث: الموافقة على الاتفاقية */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الثالث: الموافقة على اتفاقية الشروط والأحكام وسياسة الخصوصية
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        بدخولك واستخدامك هذه المنصة تفيد بالموافقة على اتفاقية الشروط والأحكام وسياسة الخصوصية المتبعة لدينا والضوابط
                        والشروط التي تحكم استخدام هذه المنصة؛ فإن لم تكن موافقاً على هذه الأحكام والسياسات، يتوجب عليك عدم استخدام المنصة،
                        وإذاك تقر بأن استمرارك في استخدام المنصة بعد إعلان التغييرات التي تطرأ على هذه الأحكام أو على سياسة الخصوصية في المنصة
                        سيعتبر بمثابة موافقة منك على هذه التغييرات.
                    </Typography>

                    {/* البند الرابع: التعديلات على الاتفاقية */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الرابع: التعديلات على اتفاقية الشروط والأحكام وسياسة الخصوصية
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        تحتفظ منصة استحواذ بالحق في تغيير أو تحديث الشروط والأحكام وسياسة الخصوصية في أي وقت وهو مسؤول عن إشعار المستخدم
                        عن أي تعديل أو تغيير يُجرى على هذه الشروط والأحكام وسياسة الخصوصية فور حدوث ذلك.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        أي تعديل أو تغيير تطرأ على هذه الشروط والأحكام وسياسة الخصوصية يصبح نافذاً فور اعتماده من الشركة، والاستمرار في
                        استخدام المنصة بعد اعتماد أي تعديل أو تغيير يعني قبول المستفيد/المستخدم وإقراره التام بتلك التعديل أو التغيير.
                    </Typography>

                    {/* البند الخامس: التسجيل واستخدام المنصة */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الخامس: التسجيل واستخدام منصة استحواذ
                    </Typography>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>إنشاء الحساب:</strong></Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            يتطلب استخدام خدمات المنصة تسجيل حساب شخصي أو حساب مؤسسة من خلال تعبئة النموذج الإلكتروني المخصص وتقديم البيانات المطلوبة بدقة وصحة كاملة.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            يجب أن تكون جميع البيانات المقدمة صحيحة ومحدثة، ويُعتبر المستخدم مسؤول عن تحديث بياناته بشكل مستمر.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            يقر المستخدم بأن أي بيانات غير صحيحة أو ناقصة قد تؤدي إلى تطبيق أو إلغاء الحساب وفقاً لأحكام هذه الاتفاقية.
                        </Typography>
                    </Box>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>التحقق من الهوية:</strong></Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            تحتفظ الشركة بالحق في التحقق من هوية المستخدمين عبر الوسائل التي تراها مناسبة، بما في ذلك: طلب نسخة من الهوية الوطنية، السجل التجاري، الرخصة التجارية، أو أي مستندات داعمة أخرى.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            قد يتطلب التحقق مطابقة بيانات المستخدم مع قواعد بيانات حكومية أو جهات خارجية مختصة وفق الأنظمة المرعية في المملكة.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            يوافق المستخدم على التعاون الكامل في إجراءات التحقق، ويُعتبر رفضه تقديم المستندات أو البيانات المطلوبة سبباً كافياً لتطبيق أو إلغاء الحساب.
                        </Typography>
                    </Box>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>مسؤولية الحساب:</strong></Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            يُعتبر المستخدم مسؤولاً مسؤولية كاملة عن جميع الأنشطة التي تتم من خلال حسابه، سواء قام بها بنفسه أو من خلال أشخاص مخولين من قبله.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            يلتزم المستخدم بالحفاظ على سرية بيانات الدخول (اسم المستخدم وكلمة المرور وأدوات التحقق)، وعدم مشاركتها مع أي طرف ثالث غير مصرح له.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            في حال الاشتباه باستخدام غير مصرح به للحساب، يجب على المستخدم إخطار الشركة فوراً عبر القنوات الرسمية.
                        </Typography>
                    </Box>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>استخدام الحساب:</strong></Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            لا يجوز للمستخدم فتح أكثر من حساب واحد إلا بإذن كتابي مسبق من الشركة.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            يُحظر استخدام الحساب لغرض التحايل، أو إخفاء الهوية الحقيقية، أو إدارة أنشطة محظورة وفقاً للبند (29) من هذه الاتفاقية.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            الحساب مسجل باسم مستخدم محدد أو منشأة محددة، ولا يجوز بيعه أو التنازل عنه أو تأجيره أو إعارته لطرف آخر دون موافقة مسبقة من الشركة.
                        </Typography>
                    </Box>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>صلاحيات الشركة:</strong></Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            تحتفظ الشركة بالحق في تطبيق أو إلغاء أي حساب إذا تبين أنه تم إنشاؤه باستخدام بيانات غير صحيحة أو مضللة، أو تم استخدامه بشكل مخالف لأحكام هذه الاتفاقية أو لأنظمة المملكة.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            للشركة الحق في فرض إجراءات تحقق إضافية في أي وقت لضمان الامتثال للأنظمة، بما في ذلك أنظمة مكافحة غسل الأموال وتمويل الإرهاب.
                        </Typography>
                    </Box>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>المسؤولية القانونية:</strong></Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            يتحمل المستخدم وحده كامل المسؤولية عن أي محتوى أو نشاط يتم من خلال حسابه.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            لا تتحمل الشركة أي مسؤولية عن أي خسائر أو أضرار ناتجة عن استخدام الحساب من قبل الغير نتيجة إهمال المستخدم في حماية بيانات الدخول الخاصة به.
                        </Typography>
                    </Box>

                    {/* البند السادس: التزامات وحقوق المستخدم */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند السادس: التزامات وحقوق المستخدم
                    </Typography>
                    <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>تقديم البيانات الصحيحة:</strong>
                            يلتزم المستخدم عند إنشاء حسابه في المنصة بتقديم معلومات صحيحة وكاملة ومحدثة، تشمل الاسم الكامل، ورقم الجوال، والبريد الإلكتروني، والعنوان، وأي بيانات إضافية تطلبها الشركة للتحقق من الهوية أو الامتثال للأنظمة.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>تحديث البيانات:</strong> يجب على المستخدم تحديث بياناته بصفة دورية أو فور حدوث أي تغيير لضمان صحتها. وتحتفظ الشركة بالحق في تطبيق أو إيقاف الحساب في حال تبين تقديم بيانات غير صحيحة أو مضللة.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الامتثال للأنظمة:</strong> يلتزم المستخدم بالامتثال لجميع القوانين واللوائح المعمول بها في المملكة العربية السعودية، بما في ذلك الأنظمة التجارية، وأنظمة مكافحة غسل الأموال، ومكافحة الاحتيال، وحماية البيانات الشخصية، وأنظمة التجارة الإلكترونية.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الاستخدام النظامي للمنصة:</strong> يلتزم المستخدم باستخدام المنصة فقط للأغراض المشروعة، وبما يتفق مع الأنظمة والتعليمات والسياسات المعلنة. ويحظر عليه القيام بأي أنشطة أو أفعال تؤدي إلى إساءة استخدام المنصة أو الإضرار بها أو بمستخدميها.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>حماية الحساب:</strong> يلتزم المستخدم بالحفاظ على سرية معلومات الدخول إلى حسابه، وعدم مشاركتها مع أي طرف آخر. ويتحمل وحده كامل المسؤولية عن أي استخدام يتم من خلال حسابه، سواء تم به أو نتيجة إهماله.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>المحتوى المقدم:</strong> يلتزم المستخدم بعدم نشر أو مشاركة أي محتوى مخالف للأنظمة أو النظام العام أو الآداب العامة، أو ينتهك حقوق الغير (بما في ذلك حقوق الملكية الفكرية أو الخصوصية أو السمعة).
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>التواصل المهني:</strong> يجب أن يلتزم المستخدم بأسلوب مهني ومحترم عند استخدام أدوات المراسلة أو التفاعل داخل المنصة، ولا يستخدمها لأغراض شخصية أو خارج نطاق الصفقة.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>المسؤولية:</strong> يتحمل المستخدم كامل المسؤولية عن جميع الأنشطة التي تم من خلال حسابه أو بالنيابة عنه، وعن أي ضرر يلحق بالمنصة أو بمستخدميها بسبب مخالفته لهذه الشروط أو لأي أنظمة ذات علاقة.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الالتزامات المالية:</strong> يلتزم المستخدم بسداد جميع الرسوم والعمولات المستحقة وفق ما تحدده المنصة، وفي المواعيد المحددة. ويحق للشركة تعليق أو إلغاء الحساب في حال التأخر أو الامتناع عن الدفع.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الامتناع عن التحايل:</strong> يحظر على المستخدم القيام بأي محاولة للتحايل على الأنظمة أو التهرب من دفع الرسوم أو العمولات، سواء بشكل مباشر أو غير مباشر. ويحق للشركة في حال ثبوت ذلك فرض غرامة تعويضية لا تقل عن ضعف العمولة المستحقة، مع احتفاظها بحقها في اتخاذ الإجراءات النظامية.
                        </Typography>
                    </Box>

                    {/* البند السابع: التزامات وحقوق المنصة */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند السابع: التزامات وحقوق منصة استحواذ
                    </Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            تقديم عملية الوساطة والربط بين المستخدمين من خلال الخدمات والخصائص والمحتوى الذي يساعد المستخدم في طلب ما يحتاجه من عملية إدارة الصفقات والعمل على توفير الحلول المناسبة لإتمام الصفقات.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            تقديم المساعدة للمستخدم من خلال التواصل عبر قنوات التواصل الرسمية.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            التعامل مع المستخدمين دون أي تمييز عنصري على أساس (على سبيل المثال لا الحصر) العرق، أو اللون، أو القبيلة، أو الدين، أو المذهب، أو الفكر، أو السن، أو أي من الفئات الأخرى.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            تحصيل المدفوعات المستحقة من المبالغ أو الرسوم من المستخدمين وفقاً لسياسة الاشتراك والدفع.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            إخطار المستخدم بأي مستجدات تتعلق بطريقة الاستخدام وذلك عن طريق البريد الإلكتروني أو المنصة أو الرسائل النصية.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            تطبيق سياسة الإلغاء واعتمادها بناءً على ما يختاره المستخدم وتدخل حيز النفاذ من تاريخ الاعتماد.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            تطبيق والامتثال بالمعايير الأخلاقية والقانونية وعدم الإضرار بأي عميل أو الامتناع عن تقديم أي خدمات بهدف تحقيق مكاسب أو أرباح لمصلحة أي عميل آخر.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            تقديم الصيانة الدورية الاعتيادية للمنصة وتطوير ما تراه مناسباً، ولا تلتزم بإضافة برمجيات خاصة بشكل محدد لأحد المستفيدين بناءً على رغبته الفردية.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            تحتفظ منصة استحواذ بالحق في تغيير أو تحديث الشروط والأحكام أو سياسة الخصوصية في أي وقت على أن تقوم بإعلام المستخدم بها على الفور في حال حدوث ذلك.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            يحق للمنصة استخدام كافة المعلومات أو البيانات الشخصية المسجلة على المنصة من قبل المستخدم أو البيانات الناتجة عن استخدامه للتطبيق دون إشارة أو ربط بهوية المستخدم، وذلك لأغراض تشغيل أو تطوير المنصة أو لأي غرض آخر تنص عليه هذه الاتفاقية.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            يحق للمنصة تعديل أو إنهاء أي خدمة أو أي جزء من الخدمة لأي من الأسباب مع إشعار المستخدم بذلك.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            يحق للمنصة إلغاء حساب المستخدم في حال ارتكابه أحد حالات الامتناع الواردة في الفقرة (6) من البند الخامس.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            تحتفظ الشركة بالحق في مراجعة المحتوى المقدم من قبل المستخدم، وإزالة أي محتوى قد يخالف هذه الشروط والأحكام دون إشعار مسبق للمستخدم.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            يحق للمنصة طلب الوثائق والأوراق الثبوتية أو أي مستندات أو معلومات إضافية للتحقق من هوية المستخدم.
                        </Typography>
                    </Box>

                    {/* البند الثامن: سياسة رسوم الاشتراك وآلية الدفع */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الثامن: سياسة رسوم الاشتراك وآلية الدفع
                    </Typography>
                    <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الرسوم العامة:</strong> يتحمل المستخدم رسوم الخدمات المقدمة من المنصة حسب ما يتم تحديده في كل خطة أو باقة، سواء كانت شهرية أو سنوية أو لمرة واحدة. ويتم عرض قيمة الرسوم وآلية الدفع بوضوح قبل إتمام الاشتراك أو استخدام أي خدمة مدفوعة.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>طرق الدفع:</strong> يكون الدفع من خلال الوسائل المعتمدة لدى المنصة والمبينة في صفحة السداد، وتشمل التحويل البنكي، البطاقة الائتمانية، أو أي وسيلة إلكترونية أخرى تعتمدها الشركة مستقبلاً.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>رفض أو إلغاء الدفع:</strong> يحق للشركة رفض أو إلغاء أي عملية دفع في الحالات التالية:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>الاشتباه بوجود احتيال أو استخدام غير نظامي لوسائل الدفع.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>مخالفة المستخدم للشروط والأحكام أو الأنظمة المرعية في المملكة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>وجود مخاطر تتعلق بغسل الأموال أو تمويل الإرهاب أو أي مخالفات مالية.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>المسؤولية عن الدفع:</strong> يكون المستخدم مسؤولاً مسؤولية كاملة عن أي خسائر تتكبدها المنصة بسبب استخدام وسائل دفع غير مشروعة أو إهماله في حماية بياناته المالية.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>عدم استرداد المبالغ:</strong> لا يحق للمستخدم استرداد المبالغ المدفوعة بعد إتمام الدفع ما لم يكن هناك سبب نظامي أو تقني جوهري يمنع تقديم الخدمة. ويستثنى من ذلك الحالات التالية فقط:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>حدوث خلل دائم يمنع الانتفاع من المنصة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>وقوع حالة قوة قاهرة أو ظرف طارئ يمنع استمرار الخدمة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>الحالات التي تنظمها سياسة الإلغاء المعتمدة من الشركة.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>إشعار المستخدم:</strong> يتم إشعار المستخدم عبر البريد الإلكتروني أو المنصة بأي رسوم إضافية قبل فرضها، ويُعتبر استمراره في استخدام الخدمة بعد الإشعار قبولاً صريحاً بها.
                        </Typography>
                    </Box>

                    {/* البند التاسع: سياسة دفع العمولة */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند التاسع: سياسة دفع العمولة
                    </Typography>
                    <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>نسبة ورسوم النجاح:</strong> تستحق الشركة عمولة تُعرف باسم "رسوم النجاح" بنسبة 5% من إجمالي قيمة الصفقة التي يتم إتمامها عبر المنصة، وتحسب العمولة من البائع ما لم يتم الاتفاق على خلاف ذلك كتابياً.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>موعد وطريقة الدفع:</strong> تُدفع العمولة فور إتمام الصفقة وبالوسائل المعتمدة لدى الشركة، وتشمل التحويل البنكي أو أي وسيلة إلكترونية أخرى تحددها المنصة.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الضرائب والرسوم الإضافية:</strong> يتحمل المستخدم جميع الضرائب والرسوم المترتبة على دفع العمولة، بما في ذلك ضريبة القيمة المضافة وأي رسوم تحويل بنكي أو معالجة مالية.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>عدم استرداد العمولة:</strong> لا يجوز استرداد العمولة بعد إتمام الصفقة وسدادها، إلا في حالة إلغاء الصفقة قبل تنفيذها وموافقة خطية من الشركة.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>محاولة التحايل أو إتمام الصفقة خارج المنصة:</strong> يحظر على المستخدمين (البائعين أو المشترين) إتمام الصفقات خارج المنصة بهدف التهرب من دفع العمولة. وفي حال ثبوت ذلك، يحق للشركة فرض غرامة تعويضية لا تقل عن ضعف العمولة المستحقة، إضافة إلى المطالبة بالتعويض عن أي أضرار أخرى، وتحديد الإجراءات النظامية المناسبة.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>استحقاق العمولة بعد التواصل عبر المنصة:</strong> تستحق عمولة المنصة بنسبة 5% من إجمالي قيمة الصفقة في كل حالة يتم فيها إتمام الصفقة بين البائعين والمشترين الذين تم التواصل بينهم من خلال المنصة، سواء تم إبرام العقد أو إتمام البيع داخل المنصة أو خارجها. ويُعد أي تواصل أولي بين الطرفين عبر المنصة بمثابة دليل كافٍ على نشوء علاقة وساطة تجارية موجبة لاستحقاق العمولة. وتحتفظ الشركة بحقها الكامل في تحصيل العمولة والمطالبة بالتعويض إذا ثبت أن الصفقة أبرمت خارج المنصة للتحايل على الرسوم.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>تعديل العمولة:</strong> تحتفظ الشركة بالحق في تعديل نسبة العمولة أو سياسات الدفع من وقت لآخر بما يتناسب مع أنظمة المملكة، ويتم إشعار المستخدمين رسمياً بأي تعديل قبل تطبيقه.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>إخلاء المسؤولية:</strong> لا تتحمل المنصة أي مسؤولية عن الترتيبات المالية بين المستخدمين بشأن الصفقات أو سداد العمولة، ويقع على كل طرف واجب التحقق من التزامه قبل إتمام الصفقة.
                        </Typography>
                    </Box>

                    {/* البند العاشر: سياسة الإلغاء */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند العاشر: سياسة الإلغاء
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        يحق للمستخدم إلغاء اشتراكه في المنصة في أي وقت من خلال واجهة المنصة أو وفقاً للإجراءات التي تحددها المنصة.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        يشترط على المستخدم إتباع الخطوات المحددة لإلغاء الاشتراك.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        تخضع عملية استرداد الرسوم لسياسة الإلغاء الخاصة بالمنصة، وتضمن هذه السياسات تحديد كيفية ذلك.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        يحق لمنصة استحواذ إلغاء اشتراك المستخدم دون إرجاع مبلغ الاشتراك في الحالات التالية:
                    </Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            إذا ثبت استخدام المستخدم لهذه المنصة لأغراض غير مشروعة وغير قانونية أو ثبت أي تصرف احتيالي عليه.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            إذا ثبت انتهاك أو مخالفة المستخدم لأي من الشروط والأحكام وسياسة الخصوصية الخاصة بالمنصة أو الأنظمة ذات العلاقة.
                        </Typography>
                    </Box>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        يحق لمنصة استحواذ تعليق تقديم الخدمات أو إنهاء اشتراك المستخدم كلياً أو جزئياً في حال ارتكاب المستخدم مخالفة لأي من بنود اتفاقية الشروط والأحكام وسياسة الخصوصية.
                    </Typography>

                    {/* البند الحادي عشر: البيانات والمعلومات التي يتم جمعها */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الحادي عشر: البيانات والمعلومات التي يتم جمعها على منصة استحواذ
                    </Typography>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>المعلومات الشخصية:</strong></Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>البيانات الشخصية:</strong> تقوم المنصة بجمع معلومات عن المستخدمين من حساباتهم الشخصية مثل: اسم المستخدم ورقم الجوال، والعنوان، البريد الإلكتروني، وغير ذلك من البيانات ذات الطابع الشخصي لملف المستخدم على المنصة.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>البيانات السرية:</strong> المعلومات التي يطلبها الموقع من المستخدم عند إنشاء حساب خاص للمستخدم، بما في ذلك البيانات الشخصية الخاصة بالمستخدم - على سبيل المثال لا الحصر. تشمل البيانات مثل المعلومات المالية، السجلات الصحية، أرقام الضمان الاجتماعي، وغيرها من المعلومات السرية.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>المعلومات المتبادلة أثناء التواصل:</strong> عند تواصل المستخدمين مع الشركة، قد يتم جمع المعلومات التالية:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>الطلبات المقدمة لخدمات دعم العملاء</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>الاستفسارات</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>والملاحظات</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>الشكاوى</Typography>
                            </Box>
                        </Typography>
                    </Box>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>بيانات الاستخدام:</strong> عنوان بروتوكول الإنترنت الخاص بالمستخدم (IP) وتفاصيل إصدار متصفح الويب الذي استخدمه مستخدم الموقع.</Typography>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>معلومات إضافية:</strong></Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        يتم الحصول على هذه المعلومات من خلال استخدام المستخدم للمنصة وتتضمن هذه المعلومات نوع الهاتف الذكي ومعلومات تقنية عن أساليب اتصال المستخدم بالمنصة، ونظام التشغيل وإصداره واللغة والموقع الجغرافي للعميل - في حال سمح بذلك.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        بالإضافة لدليل العناوين الخاص بك وجهات الاتصال - في حال سمح المستفيد/المستخدم بذلك. وغيرها من المعلومات المشابهة مثل تفاصيل الخدمات أو المنتجات المطلوبة والتفضيلات وسيتم الاحتفاظ بها عند إنشاء الحساب في حال سمح المستخدم بذلك.
                    </Typography>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>البيانات الناتجة عن العمليات والخدمات المقدمة:</strong></Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        تحتفظ المنصة بمعلومات المستخدمين والخدمة المقدمة لهم - على سبيل المثال لا الحصر- المواقع والأوقات التي تم استخدام المنصة فيها، عدد مرات الاستخدام، ويحق للمنصة الاحتفاظ بهذه المعلومات حتى بعد إنهاء المستخدم للحساب دون الإشارة أو ربطها بحساب المستخدم.
                    </Typography>

                    {/* البند الثاني عشر: الغرض من استخدام المعلومات */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الثاني عشر: الغرض من استخدام المعلومات التي تم جمعها
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        تقوم منصة استحواذ بجمع واستخدام معلومات المستخدم في الأغراض التالية:
                    </Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>خدمة المستخدم:</strong> تستخدم المعلومات لتقديم الخدمات وتلبية الاحتياجات التي يطلبها المستخدم عبر المنصة.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>تحسين المنصة:</strong> تستخدم المعلومات لتحسين إدارة وتجربة المستخدم للمنصة والعمل على تطويرها بما يتماشى مع التطلعات والمتطلبات اللازمة.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>التسويق والاتصالات:</strong> تستخدم المعلومات لإرسال إشعارات حول العروض والتحديثات والتواصل المباشر مع المستخدم. تستخدم المعلومات في الاستجابة للطلبات الخاصة بالمستخدم بناءً على خدمات، أو استفسارات، أو الأسئلة، وفي حال قرر المستخدم الانضمام إلى قائمة مراسلاتنا، فإنه سوف يتلقى رسائل على بريده الإلكتروني قد تتضمن أخبار ومعلومات تتعلق بالمنصة بالإضافة للحملات الترويجية.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>تكوين الإحصائيات:</strong> للمنصة جمع البيانات بهدف إعداد الإحصائيات والتقارير المتعلقة بالصفقات المكتملة عبر المنصة وذلك لإبراز خدمات المنصة وقيمة ونوع الخدمات المنجزة من خلالها.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>الامتثال القانوني:</strong> تستخدم المعلومات للامتثال بالأنظمة واللوائح المعمول بها في المملكة العربية السعودية.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>الموافقة:</strong> تقوم المنصة بأخذ موافقة المستخدم قبل معالجة البيانات لأي غرض من الأغراض المذكورة أعلاه.
                        </Typography>
                    </Box>

                    {/* البند الثالث عشر: حدود الإفصاح عن معلومات المستخدم */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الثالث عشر: حدود الإفصاح عن معلومات المستخدم الشخصية
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        لا تستخدم المعلومات الشخصية للعميل إلا للأغراض المحددة في البند الثاني عشر أعلاه باستثناء الحالات التالية:
                    </Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            في حال الحصول على موافقة من المستخدم بالإفصاح.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>مشاركة بيانات المستخدم مع مقدمي الخدمة:</strong> تقوم منصة استحواذ بتزويد مقدمي الخدمة ببيانات المستخدم لغرض توفير الحماية الكافية لبياناته وتقديم مزايا وعروض مناسبة على خدمات المنصة. تتطبق هذه السياسة على مقدم الخدمة ويكون ملزماً بها.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>مشاركة المعلومات مع طرف ثالث:</strong> قد توظف الشركة شركات أخرى أو أفراد لأداء المهام نيابة عنها، وعلى سبيل المثال لا الحصر: إرسال البريد الإلكتروني، تحليل البيانات، تقديم المساعدة والتسويق، تقديم نتائج البحث. ويكون لهؤلاء إمكانية الوصول إلى البيانات المقدمة من المستخدم.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            الإفصاح بها لدى الجهات المختصة في حال طلبها بسبب الاستخدام غير المشروع للمنصة أو الامتثال للمتطلبات النظامية.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            قد ينص على البيانات في حالات خاصة بما يتوافق مع الأنظمة واللوائح المعمول بها في المملكة العربية السعودية، ومنها على سبيل المثال لا الحصر: أوامر الاستدعاء أو الأوامر القضائية.
                        </Typography>
                    </Box>

                    {/* البند الرابع عشر: معايير معالجة البيانات */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الرابع عشر: معايير معالجة البيانات
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        تقوم الشركة بمعالجة البيانات وفقاً لعدة معايير ومنها على سبيل المثال لا الحصر:
                    </Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>المشروعية:</strong> تعالج البيانات وفقاً لموافقة المستخدم بما يتوافق مع الأنظمة واللوائح المعمول بها في المملكة العربية السعودية، بما في ذلك نظام حماية البيانات الشخصية.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>العدالة:</strong> تعالج البيانات بطريقة نزيهة وغير مضللة، بحيث لا تؤدي المعالجة إلى تأثيرات سلبية غير مبررة على حقوق المستخدم.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>الشفافية:</strong> تتيح المنصة للعميل المعلومات بوضوح عن كيفية جمع بياناتهم ومعالجتها، بما في ذلك الأغراض التي تستخدم من أجلها.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>جمع البيانات الضرورية:</strong> تجمع البيانات فقط بما يتناسب مع الأغراض المشروعة التي تتطلبها تقديم خدمات المنصة إلى المستخدم وتجنب جمع أي بيانات غير ضرورية أو إضافية غير لازمة.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>الاحتفاظ بالبيانات:</strong> تحفظ البيانات للمدة الزمنية اللازمة لتوفير خدمات المنصة.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>التحقق والتحديث:</strong> تتخذ التدابير اللازمة لضمان البيانات دقيقة ومحدثة، بما في ذلك التحقق من صحة البيانات عند جمعها وتحديثها بشكل دوري.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>إجراءات تصحيح البيانات:</strong> تتيح المنصة للعميل إمكانية تصحيح أي بيانات غير دقيقة أو تحديثها، وذلك وفق آلية واضحة لتقديم طلبات تصحيح البيانات وضمان استجابتها بشكل مناسب.
                        </Typography>
                    </Box>

                    {/* البند الخامس عشر: حقوق المستخدم */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الخامس عشر: حقوق المستخدم
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        يحق للعميل فيما يتعلق ببياناته الشخصية طلب أي من الآتي:
                    </Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            الوصول إلى بياناته الشخصية المتوفرة لدى المنصة، ويشمل ذلك الاطلاع عليها، والحصول على نسخة منها بصيغة واضحة ومطابقة لمضمون السجلات.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            تصحيح بياناته الشخصية، أو إتمامها، أو تحديثها، أو حذفها.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            نقل بياناته الشخصية إلى منظمة أخرى، بشرط أن تكون هذه البيانات قابلة للنقل من خلال وسائل تقنية وتنسيق منظم.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            إتلاف بياناته الشخصية المتوفرة لدى المنصة والتي انتهت الحاجة منها، وذلك دون الإخلال بما تقضي به المادة (الثامنة عشرة) من نظام حماية البيانات الشخصية.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            سحب موافقته على معالجة بياناته الشخصية في أي وقت، مع عدم الإخلال بمشروعية أي معالجة تمت بناءً على الموافقة قبل طلب سحبها.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            معرفة الغرض من جمع بياناته وحفظها ونطاق استعمال بياناته الشخصية.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            الاعتراض على معالجة بياناته الشخصية وذلك وفق الحالات التالية:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>في حال كانت معالجة البيانات تضر بمصالح أو حقوق المستخدم الشخصية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>في حال استخدام البيانات ومعالجتها لأغراض التسويق المباشر مثل تلقي العروض الترويجية أو الإعلانات.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>في حال كانت معالجة البيانات تشمل اتخاذ قرارات تعتمد فقط على التحليل الآلي والتي تضر بمصالح وحقوق المستخدم بشكل كبير.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>في حال كانت معالجة البيانات لا تتوافق مع الأنظمة واللوائح ذات العلاقة.</Typography>
                            </Box>
                        </Typography>
                    </Box>

                    {/* البند السادس عشر: تخزين البيانات والاحتفاظ بها */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند السادس عشر: تخزين البيانات والاحتفاظ بها
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        تقوم الشركة بتخزين البيانات الشخصية والاحتفاظ بها وفقاً لأعلى معايير الأمان والامتثال للأنظمة واللوائح ذات العلاقة، وذلك على النحو التالي:
                    </Typography>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>تخزين البيانات:</strong></Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>الأمان:</strong> تخزن البيانات الشخصية بشكل آمن باستخدام تقنيات التشفير المتقدمة وضوابط وصول صارمة لضمان حمايتها من الوصول غير المصرح به.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>النسخ الاحتياطي:</strong> يتم إجراء نسخ احتياطية منتظمة للبيانات للحفاظ عليها من الفقدان أو التلف وضمان استردادها عند الحاجة.
                        </Typography>
                    </Box>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>الاحتفاظ بالبيانات:</strong></Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>الاحتفاظ الضروري:</strong> تحفظ البيانات فقط طالما كانت ضرورية للأغراض التي جمعت من أجلها، وبعد الانتهاء من الحاجة إلى هذه البيانات يتم حذفها أو إخفاء هويتها بطريقة آمنة.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>حساب المستفيد/المستخدم غير النشط:</strong> تحفظ بيانات المستفيد/المستخدم غير النشط لمدة سنة واحدة فقط من تاريخ انتهاء الاشتراك في المنصة، ويتم إرسال إشعار قبل بدء إجراء الحذف.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>بيانات احتياطية:</strong> تحفظ بيانات المستفيد/المستخدم لمدة (30) يوماً كاحتياطي في حالة طلب حذف البيانات كاملة من المنصة.
                        </Typography>
                    </Box>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>حذف البيانات:</strong></Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>تأكيد الحذف:</strong> عند طلب حذف البيانات من قبل المستفيد/المستخدم من المنصة، يتم تأكيد الحذف برسالة واضحة تفيد بأن البيانات ستُحذف نهائياً ولا يمكن استرجاعها.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>نموذج الحذف:</strong> عند طلب المستفيد/المستخدم لحذف حسابه لدى المنصة نهائياً؛ فيكون ذلك وفق نموذج رسمي يتضمن تأكيد مسؤولية المستفيد/المستخدم عن حذف البيانات.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>الحذف النهائي:</strong> تُحذف البيانات نهائياً من منصة استحواذ عند طلب الحذف، ويرسل تأكيد إلى المستخدم بإتمام عملية الحذف.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            <strong>انتهاء الاشتراك:</strong> عند انتهاء اشتراك المستخدم في المنصة وعدم قيامه بتجديد الاشتراك، يُشعر المستخدم بذلك بشكل دوري أو شهري، ستقوم المنصة بالاحتفاظ ببيانات المستخدم لمدة سنة واحدة فقط قبل القيام بحذف بياناته وحسابه من المنصة.
                        </Typography>
                    </Box>

                    {/* البند السابع عشر: أمان البيانات */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند السابع عشر: أمان البيانات
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        تقوم الشركة باتخاذ كافة التدابير التقنية والتنظيمية التالية لضمان أمان وحماية البيانات:
                    </Typography>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>التدابير التقنية:</strong></Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            تشفير البيانات أثناء النقل والتخزين لحمايتها من الوصول غير المصرح به.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            استخدام شبكات وبروتوكولات الأمان ومنها على سبيل المثال (SSL) لضمان تأمين البيانات خلال عملية تبادلها عبر الإنترنت.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            إجراء عمليات تدقيق أمني منتظمة وتقييمات للثغرات للكشف ومعالجة أي نقاط ضعف محتملة في المنصة.
                        </Typography>
                    </Box>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>التدابير التنظيمية:</strong></Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            تعليم سياسات صارمة للتحكم في الوصول لضمان أن البيانات متاحة فقط للمصرح لهم.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            تقديم تدريب أمني إلزامي لجميع المصرح لهم لضمان فهم كامل لسياسات الأمان والإجراءات اللازمة.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            توافر خطة استجابة متكاملة للتعامل مع حوادث خروقات البيانات لضمان استجابة سريعة وفعالة في حال حدوث أي انتهاك.
                        </Typography>
                    </Box>

                    {/* البند الثامن عشر: ملفات تعريف الارتباط والتقنيات التابعة */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الثامن عشر: ملفات تعريف الارتباط والتقنيات التابعة
                    </Typography>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>استخدام ملفات تعريف الارتباط:</strong></Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        تستخدم منصة استحواذ ملفات تعريف الارتباط (كوكيز) لتحسين تجربة المستخدم وتوفير وظائف وعمليات مخصصة، وتساعد هذه الملفات على الآتي:
                    </Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            تذكر تفاصيل وإعدادات المستفيد/المستخدم على منصة استحواذ لتحسين تجربته عند استخدامه لخدمات المنصة.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            تحليل كيفية تفاعل المستفيد/المستخدم مع منصة استحواذ لتحسين أداء المنصة.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            تخصيص المحتوى والعروض بناءً على اهتمامات المستخدم.
                        </Typography>
                    </Box>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>إدارة ملفات تعريف الارتباط:</strong></Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        تتيح منصة استحواذ للعميل عدة خيارات إدارة ملفات تعريف الارتباط من خلال إعدادات المنصة، وهي كالآتي:
                    </Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            إيقاف تشغيل ملفات تعريف الارتباط تماماً.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            تلقي إشعارات عند تعيين ملفات تعريف الارتباط.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            حذف ملفات تعريف الارتباط من جهاز المستخدم.
                        </Typography>
                    </Box>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>التقنيات التابعة الأخرى:</strong></Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        بالإضافة إلى ملفات تعريف الارتباط قد تستخدم منصة استحواذ تقنيات تابعة أخرى، مثل إشارات الويب والتقنيات المشابهة والتي بدورها تساعد على الآتي:
                    </Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            جمع المعلومات حول تفاعل المستخدم على المنصة.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            تحليل أداء المنصة وتقديم خدمات ومحتوى يتناسب مع اهتمامات المستخدم.
                        </Typography>
                    </Box>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>الإفصاح عن المتغيرات:</strong></Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        في حال القيام باستخدام ملفات تعريف الارتباط أو التقنيات التابعة لأغراض أخرى غير المنصوص عليها أعلاه، وعلى سبيل المثال لا الحصر: الأغراض الإعلانية أو التحليل العميق، ستقوم منصة استحواذ بتوضيح ذلك الغرض.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        تحتفظ شركة استحواذ بالحق في تحديث سياسة ملفات تعريف الارتباط والتقنيات التابعة من وقت لآخر، وستقوم شركة استحواذ بنشر أي تغييرات على هذه السياسة على المنصة.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        نوصي المستخدم بمراجعة هذه السياسة بانتظام للبقاء على اطلاع بأحدث المعلومات حول المنصة وسياساتها الأخرى.
                    </Typography>

                    {/* البند التاسع عشر: إدارة خرق البيانات ومسؤولية المنصة */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند التاسع عشر: إدارة خرق البيانات ومسؤولية منصة استحواذ
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        في حالة حدوث خرق البيانات، ستتخذ منصة استحواذ خطوات فورية لاحتواء الحدث وآثاره، بما في ذلك عزل الأجزاء المتأثرة من النظام وتقييم نطاق الخرق، واتخاذ الإجراءات اللازمة لحماية البيانات المتبقية.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        ستقوم منصة استحواذ بإخطار المستخدمين والجهات المختصة ذات العلاقة، ووفقاً لنظام مكافحة الجرائم المعلوماتية والأنظمة ذات العلاقة.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        ستقوم المنصة بإجراء تحقيق شامل لتحديد أسباب الخرق وتقييم تأثيره وتحديد أي ثغرات أمنية أدت إلى الحادثة. وبناءً على نتائج التحقيق ستقوم منصة استحواذ بمراجعة وتحديث سياساتها وإجراءاتها الأمنية في حال تطلب الأمر لضمان تعزيز الحماية وعدم تكرار مثل هذه الحادثة في المستقبل.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        تحرص الشركة أن تخضع الأطراف المتعاملة مع منصة استحواذ كطرف ثالث ولديهم إمكانية الوصول إلى البيانات لنفس المعايير التي تخضع لها الشركة ومنصة استحواذ لحماية معلومات المستخدم.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        لا تكون على منصة استحواذ أو الشركة المالكة لها، أية مسؤولية عن الإفصاح الخاطئ لمعلومات المستخدم المخزنة لديها بسبب خطأ من أي طرف أو من أعمال غير مصرح بها أو غير مشروعة لأطراف ثالثة، ولا تقبل أي ضمان أو خسائر أو أضرار قد تنشأ عن ذلك.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        تحرص الشركة على أن تكون منصة استحواذ خالية من الفيروسات وبرامج التجسس أو برامج الكوكيز الضارة أو أي محتوى ضار آخر بجهود معقولة ومناسبة، ولكن لا تضمن منصة استحواذ أو الشركة ولا تتحملان المسؤولية عن أية أضرار قد تصيب جوال المستخدم أو أي جهاز آخر يستخدم عليه المنصة من فيروسات أو اختراقات أو تجسس قد تؤدي إلى سرقة بيانات المستخدم أو معلومات بطاقة الائتمان الخاصة به، فيكون المستخدم مسؤول وحده عن حماية جهازه.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>الامتثال والمراقبة:</strong></Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        تلتزم منصة استحواذ بجميع الأنظمة واللوائح المعمول بها في المملكة العربية السعودية المتعلقة بحماية البيانات، بما في ذلك أي تشريعات جديدة قد تصدر، وسيتم تنفيذ جميع الإجراءات والسياسات لضمان الامتثال للمتطلبات النظامية وتطبيق أفضل الممارسات في حماية البيانات الشخصية.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        تجري منصة استحواذ عمليات تدقيق داخلية منتظمة لضمان الالتزام بهذه السياسة وجميع متطلبات حماية البيانات، ويشمل التدقيق مراجعة جميع العمليات والإجراءات وتقييم فعالية التدابير الأمنية وتحديد أي خلل يحتاج إلى تحسين أو معالجة.
                    </Typography>

                    {/* البند العشرون: التغيرات على سياسة الخصوصية */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند العشرون: التغيرات التي تطرأ على سياسة الخصوصية
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        تمتلك منصة استحواذ والشركة الحق في تعديل أو تغيير أو تحديث سياسة الخصوصية، بما لا يتعارض مع ما جاء في نظام حماية البيانات الشخصية؛ وعندما نقوم بذلك ستقوم بإرسال رسالة على البريد الإلكتروني وسيطلب منك الموافقة على هذه التعديلات في حينها، حتى تتمكن من الاستمرار في استخدام المنصة، كما أن المنصة لن تقوم بمعالجة البيانات الشخصية دون الحصول على موافقتك على هذه التعديلات؛ لذا نوصي العملاء على مراجعة سياسة الخصوصية بشكل متكرر للاطلاع على أي تغييرات ليكونوا على علم وبيئة بما نقوم به في سبيل حماية البيانات الشخصية التي نقوم بجمعها. كما يقر ويرافق المستخدم على مسؤوليته في مراجعة سياسة الخصوصية هذه بشكل دوري وإدراكه للتعديلات.
                    </Typography>

                    {/* البند الحادي والعشرون: السرية وحماية حقوق الملكية الفكرية */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الحادي والعشرون: السرية وحماية حقوق الملكية الفكرية
                    </Typography>
                    <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الملكية العامة للمنصة:</strong> جميع ما تحتويه منصة استحواذ من محتوى وتصميمات وعناصر بصرية وصوتية وبرمجيات وواجهات مستخدم وأكواد مصدرية وبيانات ورسومات وشعارات وأسماء تجارية وعلامات مميزة، تعد ملكاً حصرياً لشركة منصة استحواذ الرقمية، ومحمية بموجب أنظمة حماية الملكية الفكرية والعلامات التجارية وحقوق النشر المعمول بها في المملكة العربية السعودية.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الترخيص بالاستخدام المحدود:</strong> يُمنح المستخدم ترخيصاً شخصياً وموقتاً وغير حصري لاستخدام المنصة لغرضها المحدد فقط، ولا يترتب على هذا الترخيص أي نقل أو تنازل عن الملكية الفكرية أو الحقوق المرتبطة بها.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>القيود على الاستخدام:</strong> يُحظر على المستخدم – دون إذن خطي مسبق من الشركة – القيام بأي مما يلي:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>نسخ أو إعادة توزيع أو تعديل أو إنشاء أعمال مشتقة من أي جزء من محتوى المنصة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>استخدام العلامات التجارية أو الشعارات أو الأسماء التجارية الخاصة بالشركة في أي مادة دعائية أو تجارية أو عبر الإنترنت.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>بيع أو تأجير أو ترخيص أو إعادة بيع أي من خدمات أو مكونات المنصة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>إزالة أو إخفاء أو تعديل أي إشعارات أو رموز تتعلق بحقوق الملكية الفكرية أو حقوق النشر الظاهرة على المنصة أو ضمن محتواها.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>محتوى المستخدم:</strong> عند قيام المستخدم بنشر أو رفع أي محتوى عبر المنصة (مثل النصوص أو الصور أو المستندات أو البيانات)، فإنه يمنح الشركة ترخيصاً غير حصري وعالمياً وقابلاً للتحويل لاستخدام هذا المحتوى لغرض تشغيل المنصة وتحسين خدماتها فقط. تلتزم الشركة بعدم استغلال أو نشر هذا المحتوى خارج نطاق خدمات المنصة أو بما يخالف السرية أو الخصوصية.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>انتهاك حقوق الملكية الفكرية:</strong> في حال وجود ادعاء بانتهاك حقوق ملكية فكرية لأي طرف، يجوز للمنصة – بناءً على تقديرها – إزالة المحتوى المخالف أو تعليق الحساب لحين تسوية النزاع، دون أن تتحمل أي مسؤولية مالية أو قانونية تجاه المستخدم.
                        </Typography>
                    </Box>

                    {/* البند الثاني والعشرون: تحديد وإخلاء المسؤولية */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الثاني والعشرون: تحديد وإخلاء المسؤولية
                    </Typography>
                    <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>طبيعة دور المنصة:</strong> تعمل منصة استحواذ كوسيط إلكتروني مستقل بهدف إلى الربط بين البائعين والمشترين لتسهيل عمليات عرض وشراء وبيع الأنشطة التجارية، ولا تُعتبر المنصة أو الشركة المالكة لها طرفاً في أي صفقة يتم إبرامها بين المستخدمين، ولا تتحمل أي مسؤولية عن تنفيذ أو صحة أو التزامات تلك الصفقات.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>نطاق عدم المسؤولية:</strong> لا تتحمل الشركة أو المنصة أي مسؤولية – مباشرة أو غير مباشرة – عن أي أضرار أو خسائر أو التزامات قد تنشأ نتيجة لأي مما يلي:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>استخدام المنصة أو عدم القدرة على استخدامها لأي سبب تقني أو نظامي.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>أي تصرف أو امتناع من قبل المستخدمين الآخرين.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>أي أخطاء أو بيانات غير دقيقة يقدمها البائع أو المشتري.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>أي خسائر مالية أو تجارية أو فقدان بيانات أو فرص ناتجة عن استخدام المنصة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>أي أعطال فنية أو مشاكل في الاتصال أو انقطاع الخدمة أو الهجمات الإلكترونية الخارجة عن إرادة الشركة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>أي اختلافات أو نزاعات تنشأ بين المستخدمين حول الصفقات أو العمولات أو المدفوعات.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>أي تعاملات أو روابط أو محتوى خارجي يتم الوصول إليه من خلال المنصة أو الإعلانات المنشورة فيها.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>مسؤولية المستخدم:</strong> يتحمل المستخدم وحده المسؤولية الكاملة عن جميع الأنشطة التي يقوم بها داخل المنصة، بما في ذلك صحة ودقة المعلومات المقدمة، والصفقات التي يشارك فيها، وأي محتوى أو بيانات ينشرها أو يرسلها. كما يتحمل المستخدم المسؤولية الكاملة عن أي أضرار أو خسائر تلحق بالمنصة أو بالمستخدمين الآخرين نتيجة مخالفته لهذه الاتفاقية أو لأي أنظمة سارية.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الحد الأقصى للمسؤولية:</strong> في جميع الأحوال، لا تتجاوز مسؤولية الشركة – في حال ثبوتها – الحد الأدنى مما تسمح به القوانين السارية أو المبالغ الفعلية التي دفعها المستخدم مقابل الخدمة محل المطالبة، أيهما أقل.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الضمانات:</strong> يتم توفير المنصة وخدماتها "كما هي" (As-Is) دون أي ضمانات صريحة أو ضمنية تتعلق بدقة المحتوى أو استمرارية الخدمة أو خلوها من الأخطاء أو الانقطاعات. لا تضمن الشركة تحقيق أي نتائج مالية أو تجارية للمستخدمين، ولا تتحمل أي مسؤولية عن فشل أي صفقة أو انسحاب أي طرف منها. كما لا تضمن المنصة توافق خدماتها مع جميع الأجهزة أو المتصفحات أو أنظمة التشغيل المستخدمة من قبل المستخدم.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الاستثناءات من تحديد المسؤولية:</strong> لا يسري تحديد أو إخلاء المسؤولية في الحالات التالية:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>إذا ثبت أن الضرر ناتج عن غش أو إهمال جسيم أو سوء نية من الشركة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>إذا أوجبت القوانين أو الأوامر القضائية خلاف ذلك.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>المخاطر الأمنية:</strong> تحرص الشركة على حماية المنصة من الفيروسات والاختراقات وبرامج التجسس وفق أفضل الممارسات الفنية المتاحة. ومع ذلك لا تتحمل الشركة أي مسؤولية عن الأضرار الناتجة عن هجمات إلكترونية أو أعمال أو برامج ضارة خارجة عن إرادتها. المستخدم هو المسؤول عن حماية أجهزته وشبكته الشخصية واتخاذ التدابير الأمنية اللازمة عند استخدام المنصة.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الإجراءات القانونية والمطالبات:</strong> يقر المستخدم بأن أي مطالبة ضد الشركة يجب أن تُرفع خلال مدة لا تتجاوز سنة واحدة من تاريخ وقوع الحدث محل المطالبة، وبعدها يُعد حق المطالبة لاغياً. تحتفظ الشركة بحقها الكامل في الرجوع على المستخدم بالتعويض عن أي أضرار أو خسائر أو مصاريف قانونية تتكبدها نتيجة مخالفة المستخدم لهذه الاتفاقية أو لأي نظام ساري. يُعتبر امتناع المستخدم عن استخدام المنصة أو خدماتها هو الوسيلة الوحيدة المتاحة له لمعالجة أي ضرر أو عدم رضا عن استخدامه للمنصة.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>البيانات والمحتوى الخارجي:</strong> لا تتحمل الشركة أي مسؤولية عن المحتوى أو الروابط أو المواقع الإلكترونية أو الإعلانات التي قد تُعرض داخل المنصة أو يمكن الوصول إليها عبرها. تقع مسؤولية التحقق من مصداقية وأمان أي محتوى خارجي أو معلن على عاتق المستخدم وحده.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>حدود التعويض:</strong> لا تلتزم الشركة بأي تعويضات عن الأضرار المعنوية أو فقدان الأرباح أو السمعة أو الفرص التجارية، ويقتصر أي تعويض – إن ثبت – على الأضرار المادية المباشرة الناتجة عن خطأ ثابت ومثبت على الشركة.
                        </Typography>
                    </Box>

                    {/* البند الثالث والعشرون: القانون الواجب التطبيق والاختصاص القضائي */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الثالث والعشرون: القانون الواجب التطبيق والاختصاص القضائي
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        تخضع اتفاقية الشروط والأحكام وسياسة الخصوصية في تفسيرها وتنفيذها وكافة جوانبها للأنظمة واللوائح المعمول بها في المملكة العربية السعودية، ويتم حل أي نزاعات تنشأ عن أو فيما يتعلق بهذه الشروط والأحكام وسياسة الخصوصية ودياً وذلك خلال 60 يوماً من تاريخ نشوء النزاع، وفي حال تعذر ذلك فيتم حلها عن طريق التحكيم وفقاً لنظام التحكيم ولائحته التنفيذية في مدينة الرياض.
                    </Typography>

                    {/* البند الرابع والعشرون: شروط الأهلية وإقرارات المستخدم */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الرابع والعشرون: شروط الأهلية وإقرارات المستخدم
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        يجب على المستخدمين:
                    </Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>أن يكونوا قد أتموا 18 عاماً على الأقل.</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>أن يتمتعوا بالأهلية القانونية الكاملة لإبرام العقود.</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>ألا يكونوا خاضعين لأي عقوبات أو منع بموجب الأنظمة السعودية.</Typography>
                    </Box>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        إذا قام شخص بالتسجيل نيابة عن شركة أو مؤسسة، فيجب أن يكون مفوضاً قانونياً لتمثيلها والتوقيع عنها.
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        يقر المستخدم ويوافق على ما يلي:
                    </Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>أن جميع المعلومات المقدمة صحيحة وكاملة.</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>الالتزام بجميع الأنظمة المعمول بها.</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>عدم استخدام المنصة لأغراض احتيالية أو غير مشروعة.</Typography>
                    </Box>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        للشركة الحق في طلب وثائق تحقق (مثل الهوية الوطنية، السجل التجاري، الرخص) ويجوز تطبيق الحساب في حال عدم توفيرها خلال المدة المحددة.
                    </Typography>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>شروط الأهلية:</strong></Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            يشترط لاستخدام المنصة أن يكون المستخدم:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>أن يكون قد أتم 18 عاماً على الأقل ويتمتع بالأهلية القانونية الكاملة للتعاقد بموجب أنظمة المملكة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>أو شخصاً اعتبارياً (شركة، مؤسسة، جمعية...)، مسجلاً وفق الأنظمة المعمول بها في المملكة، ويمثله مفوض قانوني مخول بإبرام العقود باسمه.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>لا يجوز للأشخاص المحظورين أو الموقوفين بموجب قرارات قضائية أو نظامية استخدام المنصة.</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>لا يجوز استخدام المنصة لأي أنشطة محظورة أو مخالفة للأنظمة المرعية في المملكة أو لأحكام هذه الاتفاقية.</Typography>
                    </Box>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>الموافقة الضمنية:</strong></Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            يُعد دخول المستخدم إلى المنصة أو تصفحها أو استخدام أي من خدماتها أو ميزاتها موافقةً صريحةً وملزمةً على جميع الشروط والأحكام وسياسات الخصوصية المعمول بها، حتى وإن لم يتم التسجيل بحساب أو إتمام أي عملية داخل المنصة.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>وفي حال عدم موافقة المستخدم على أي من هذه الشروط، فإن عليه التوقف فوراً عن استخدام المنصة أو تصفحها.</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>تحتفظ الشركة بالحق في اعتبار استمرار التصفح أو الاستخدام بعد أي تعديل يطرأ على الاتفاقية قبولاً ضمنياً بتلك التعديلات.</Typography>
                    </Box>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>إقرارات المستخدم:</strong></Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>أنه يتمتع بالأهلية القانونية والنظامية الكاملة لإبرام هذه الاتفاقية واستخدام خدمات المنصة.</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>أن جميع البيانات والمعلومات والمستندات المقدمة صحيحة وكاملة ومحدثة، ويتحمل كامل المسؤولية عن أي بيانات غير صحيحة أو مضللة.</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>أنه لن يستخدم المنصة إلا للأغراض المشروعة المصرح بها بموجب هذه الاتفاقية وبما يتوافق مع الأنظمة واللوائح السارية في المملكة.</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>أنه لن ينتهك أي حقوق ملكية فكرية أو حقوق تعاقدية أو خصوصية خاصة بأي طرف ثالث أثناء استخدام المنصة.</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>أنه يلتزم بالامتثال لجميع الأنظمة ذات العلاقة، بما في ذلك على سبيل المثال لا الحصر: أنظمة مكافحة غسل الأموال، مكافحة الاحتيال، حماية البيانات الشخصية، وأنظمة التجارة الإلكترونية.</Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>أنه يقر بأن المنصة مجرد وسيط إلكتروني، وأن الشركة المالكة ليست طرفاً في أي عقد يتم بين المستخدمين، ولا تتحمل أي التزامات أو مسؤوليات ناتجة عن تعاملاتهم.</Typography>
                    </Box>

                    <Typography paragraph sx={{ textAlign: 'left' }}><strong>المسؤولية عند الإخلال:</strong></Typography>
                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>
                            في حال ثبت أن المستخدم لا تتوفر فيه شروط الأهلية أو أخل بأي من إقراراته، يحق للشركة تعليق أو إلغاء حسابه فوراً دون إشعار مسبق، مع احتفاظها بحقها في المطالبة بالتعويض عن أي أضرار أو خسائر لحقت بها نتيجة هذا الإخلال.
                        </Typography>
                        <Typography component="li"
                            sx={{ textAlign: 'left', direction: 'ltr' }}>يظل المستخدم مسؤولاً مسؤولية كاملة عن جميع الأفعال والتصرفات التي قام بها خلال فترة استخدامه للمنصة.</Typography>
                    </Box>

                    {/* البند الخامس والعشرون: خدمات المنصة */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الخامس والعشرون: خدمات المنصة
                    </Typography>
                    <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>طبيعة الخدمات:</strong> تعمل المنصة كوسيط إلكتروني يربط بين البائعين والمشترين لتسهيل عمليات عرض وشراء وبيع الأنشطة التجارية بطريقة منظمة وآمنة، وفقاً للأنظمة المرعية في المملكة العربية السعودية.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الخدمات المقدمة:</strong> توفر المنصة الخدمات التالية للمستخدمين:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>خدمة الإدراج السهل للبائعين لتمكينهم من عرض أعمالهم أو أنشطتهم التجارية مع التفاصيل الأساسية والوثائق المطلوبة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>خدمة طلبات الشراء للمشترين التي تتيح لهم عرض احتياجاتهم من الأعمال أو المشاريع التي يرغبون في الاستحواذ عليها.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>نظام مراسلة داخلي آمن للتواصل المباشر بين البائعين والمشترين ضمن بيئة مراقبة ومحمية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>أدوات للتفاوض وإدارة العروض تشمل تقديم العروض، والردود، والقبول أو الرفض بشكل منظم داخل النظام.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>خدمة الإعلانات التجارية عبر مساحة مخصصة داخل المنصة وتشمل:
                                    <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                        <Typography component="li"
                                            sx={{ textAlign: 'left', direction: 'ltr' }}>الإعلانات الداخلية: التي تطرحها الشركة كالإشعارات العامة أو مواضيع مهمة أو للترويج لخدماتها أو لطرح الأعمال المميزة (Featured Listings) أو أي خدمات أخرى تقدمها المنصة.</Typography>
                                        <Typography component="li"
                                            sx={{ textAlign: 'left', direction: 'ltr' }}>الإعلانات الخارجية: التي يقدمها أطراف ثالثة من شركات أو جهات معلنة.</Typography>
                                    </Box>
                                </Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>إظهار الصفقات المكتملة في الصفحة العامة بعلامة (مباع) وفقاً لأحكام البند (32) من هذه الاتفاقية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>خدمات الدعم الفني والإشعارات عبر القنوات الرسمية المعتمدة.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>حدود الخدمات:</strong>
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>لا تضمن الشركة أن يؤدي أي عرض أو إعلان إلى إتمام صفقة أو تحقيق نتيجة مالية أو تجارية معينة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>لا تقدم المنصة أي خدمات قانونية أو مالية أو محاسبية أو استشارية متخصصة، ويقع على عاتق المستخدم وحده الحصول على المشورة المهنية المناسبة قبل إتمام أي صفقة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>لا تتحمل الشركة أي مسؤولية عن دقة أو صحة أو اكتمال المعلومات المقدمة من المستخدمين أو عن أي تعاملات تتم خارج المنصة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>لا تتحمل الشركة أي مسؤولية عن محتوى الإعلانات الخارجية أو تعاملات المستخدمين معها، ويقع على المعلن وحده كامل المسؤولية عن صحة بياناته ومحتواه.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>إذا احتوى الإعلان على روابط خارجية أو أدى الضغط عليه إلى تحويل المستخدم إلى مواقع أو منصات أخرى، فإن الشركة غير مسؤولة عن محتوى أو ممارسات أو تعاملات تلك المواقع، ويقع على عاتق المستخدم وحده التحقق من صحتها وسلامتها.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>لا يُعتبر نشر أي إعلان موافقة أو تبنيًا من الشركة لمحتواه، ويجوز للشركة حذفه أو إزالته في أي وقت إذا تبين مخالفته للشروط أو الأنظمة أو إذا رأت أن استمراره قد يضر بسمعة المنصة.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الخدمات المستقبلية:</strong> يجوز للشركة إضافة أو تطوير خدمات جديدة مستقبلاً، بما في ذلك – على سبيل المثال لا الحصر – خدمة الطرح المكتمل، خدمات الدفع عبر الضمان (Escrow Payment)، والإعلانات المميزة، والعلامات المرتفعة للحسابات، دون الحاجة إلى تعديل جوهري على هذه الاتفاقية. وتُعد هذه الإضافات جزءاً من خدمات المنصة بمجرد الإعلان عنها رسمياً أو نشرها على موقع المنصة.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>انقطاع الخدمة أو الصيانة:</strong> يجوز للشركة تعليق أو تقييد بعض الخدمات مؤقتاً لإجراء الصيانة أو التطوير التقني أو لأي أسباب نظامية دون أن يترتب على ذلك أي التزام بالتعويض. وتلتزم الشركة ببذل العناية المعقولة لإعادة الخدمة في أسرع وقت ممكن.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>العلاقة القانونية:</strong> لا تنشئ هذه الخدمات أي علاقة وكالة أو شراكة أو تمثيل قانوني بين الشركة والمستخدمين. جميع التعاملات والاتفاقات التي تتم بين البائع والمشتري تُبرم بشكل مباشر بينهما وتخضع لإرادتهما المنفصلة، دون أي التزام قانوني على المنصة تجاه أي طرف.
                        </Typography>
                    </Box>

                    {/* البند السادس والعشرون: التزامات البائع */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند السادس والعشرون: التزامات البائع
                    </Typography>
                    <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الإفصاح عن المعلومات:</strong> يلتزم البائع عند طرح نشاطه التجاري عبر المنصة بتقديم معلومات صحيحة ودقيقة وكاملة على حد علمه وقت الطرح، بما يكفي لتمكين المشتري من تكوين تصور مبدئي عن الصفقة. ويجوز للبائع تقديم تفاصيل إضافية أو توضيحات لاحقة للمشتري بالوسيلة التي يتفقان عليها (عبر المنصة، أو أثناء الاجتماعات، أو عبر الزيارات الميدانية)، على أن تبقى جميع هذه المعلومات خاضعة لالتزامه بالمسؤولية الكاملة والدقة والصدق. يشمل ذلك على سبيل المثال لا الحصر:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>البيانات المالية والضريبية والسجلات المحاسبية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>العقود الجارية مع العملاء أو الموردين أو الموظفين.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>الرخص والتصاريح التجارية وجميع المستندات النظامية اللازمة لمزاولة النشاط.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>الإفصاح عن الديون، الالتزامات، النزاعات القضائية أو المحتملة، وأي مخاطر جوهرية قد تؤثر على النشاط أو قيمته.</Typography>
                            </Box>
                            يقر البائع بأن أي بيانات أو معلومات ناقصة أو غير دقيقة أو مضللة قد يترتب عليها مسؤولية قانونية مباشرة عليه دون أدنى مسؤولية على المنصة.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>وسائل تقديم المعلومات والإفصاح خارج المنصة:</strong> يقر البائع بأن جميع المعلومات والبيانات التي يقدمها للمشتري، سواء عبر المنصة أو خارجها، وبأي وسيلة كانت (مكتوبة، شفهية، مكالمات هاتفية، مقابلات شخصية، زيارات ميدانية أو اجتماعات)، تعتبر ملزمة له وتخضع لمسؤولياته الكاملة. وتخضع هذه المعلومات لنفس الالتزامات والآثار القانونية المنصوص عليها في هذه الاتفاقية، دون أي مسؤولية على المنصة تجاه دقتها أو اكتمالها.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>المسؤولية عن صحة البيانات:</strong> يتحمل البائع المسؤولية الكاملة عن صحة ودقة واكتمال جميع المعلومات والوثائق المقدمة، ولا يحق له الرجوع على المنصة بأي تعويض في حال نشوء نزاعات أو مطالبات مع المشتري بسبب تلك المعلومات.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>سرية المعلومات:</strong> يلتزم البائع بالحفاظ على سرية أي معلومات يتلقاها عن المشتري أو الصفقة عبر المنصة أو خارجها، ويُحظر عليه استخدامها إلا لغرض إتمام الصفقة.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>المحظورات على البائع:</strong>
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحظر على البائع إدراج أي نشاط تجاري إذا لم تكن لديه نية حقيقية وجادة لإتمام عملية البيع، ويحق للشركة تعليق أو إلغاء حسابه فوراً في حال ثبوت عكس ذلك.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحظر على البائع إدراج نفس النشاط التجاري أكثر من مرة إلا بمبرر مشروع وبعد موافقة المنصة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحظر على البائع إدراج نشاط تجاري في منصات أخرى أو مع وسطاء آخرين دون الإفصاح المسبق للمنصة، إذا كان من شأن ذلك إحداث تضارب أو إرباك في عملية البيع.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحظر على البائع إخفاء أي معلومات جوهرية قد تؤثر على تقييم النشاط مثل النزاعات القضائية، الإشعارات الحكومية، أو الديون الكبيرة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحظر على البائع المبالغة في الإيرادات أو الأرباح أو تزوير أي مستندات أو بيانات.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحظر على البائع محاولة إتمام الصفقة خارج المنصة بهدف التهرب من دفع العمولة، وفي حال ثبوت ذلك يحق للشركة فرض غرامة تعويضية لا تقل عن ضعف العمولة المستحقة مع احتفاظها بحقها في أي تعويض إضافي.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحظر على البائع نشر أي محتوى كاذب أو مضلل أو مخالف للأنظمة أو النظام العام أو الآداب العامة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحظر على البائع إدراج أنشطة محظورة بموجب أنظمة المملكة مثل المقامرة، المواد الإباحية، أو أي منتجات أو خدمات محظورة شرعاً أو نظاماً.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>دفع رسوم النجاح (العمولة):</strong> يلتزم البائع بدفع رسوم النجاح (العمولة) المستحقة للمنصة بنسبة 5% من إجمالي قيمة الصفقة، وذلك فور إتمامها وبالطريقة التي تحددها المنصة. وفي حال الامتناع أو التأخير عن الدفع، يحق للشركة اتخاذ جميع الإجراءات النظامية لتحصيل حقوقها.
                        </Typography>
                    </Box>

                    {/* البند السابع والعشرون: التزامات المشتري */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند السابع والعشرون: التزامات المشتري
                    </Typography>
                    <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الفحص الذاتي للجهالة (Due Diligence):</strong> يلتزم المشتري بإجراء الفحص الذاتي للجهالة قبل إتمام أي صفقة، ويشمل ذلك (على سبيل المثال لا الحصر):
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>مراجعة الوضع المالي والتجاري للنشاط، بما في ذلك الميزانيات، الديون، الالتزامات الضريبية، العقود الجارية، وأي التزامات مالية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>التحقق من الوضع القانوني للنشاط التجاري، بما في ذلك التراخيص والرخص التجارية، وسلامة الملكية الفكرية، وعدم وجود نزاعات قضائية أو مخالفات نظامية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>فحص الأصول الملموسة وغير الملموسة (المعدات، العلامات التجارية، البرمجيات، العملاء، الموردين، وغيرها...).</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>التحقق من التزامات العاملين والنواحي العمالية وفقاً لنظام العمل السعودي.</Typography>
                            </Box>
                            يقر المشتري بأن إجراء هذا الفحص يقع تحت مسؤوليته الخاصة، وأن المنصة لا تقدم أي ضمانات أو استشارات مالية أو قانونية أو ضريبية، ودورها يقتصر على الوساطة الإلكترونية.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الاستعانة بالمستشارين:</strong> يحق للمشتري، على مسؤوليته الخاصة، الاستعانة بمستشارين قانونيين أو ماليين أو محاسبين معتمدين لأغراض الفحص الذاتي للجهالة، شريطة:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>أن يكون هؤلاء المستشارون ملتزمين مسبقاً باتفاقيات سرية مماثلة (NDA) لا تقل حماية عن الاتفاقية الحالية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>أن يظل المشتري مسؤولاً مسؤولية مباشرة وكاملة عن أي إفصاح أو استخدام غير مشروع يصدر عن مستشاريه.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>لا تتحمل المنصة أو الشركة المالكة لها أو البائع أي مسؤولية تجاه هؤلاء المستشارين، وتقتصر العلاقة التعاقدية على المشتري وحده.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>استخدام المعلومات السرية:</strong> يلتزم المشتري باستخدام جميع المعلومات والوثائق التي يحصل عليها من خلال المنصة أو من البائع حصراً لغرض تقييم الصفقة. يحظر على المشتري مشاركة أو كشف هذه المعلومات لأي طرف ثالث غير مفوض إلا بموافقة خطية من البائع أو وفق ما تقتضيه الأنظمة المرعية. تظل هذه الالتزامات سارية على المعلومات سواء حصل عليها المشتري عبر المنصة أو خارجها (زيارات، اجتماعات، مقابلات).
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>المسؤولية عن المخاطر:</strong> يقر المشتري بأن قراره بالشراء يتم بناءً على نتائج الفحص الذاتي للجهالة الذي يقوم به بنفسه أو من ينوبه، ولا يحق له الرجوع على المنصة بأي مطالبات أو تعويضات عن أي بيانات أو معلومات ناقصة أو غير دقيقة يقدمها البائع. يقر المشتري بأن إتمام الصفقة دون القيام بفحص كاف للجهالة أو متكامل يتم على مسؤوليته الخاصة وحده.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>القيود على المشتري:</strong>
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحظر على المشتري التواصل مع البائعين عبر المنصة لأغراض غير متعلقة بالشراء.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحظر على المشتري محاولة إتمام الصفقة خارج المنصة للتهرب من رسوم النجاح، وفي حال ثبوت ذلك يحق للشركة فرض غرامة تعويضية لا تقل عن ضعف العمولة المستحقة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحظر على المشتري استخدام المنصة أو التواصل مع البائع لغرض جمع المعلومات فقط أو بدون نية جادة لإتمام الصفقة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحظر على المشتري استغلال المعلومات السرية التي حصل عليها (عبر المنصة أو خارجها) للإضرار بالبائع أو منافسته بطريقة غير مشروعة.</Typography>
                            </Box>
                        </Typography>
                    </Box>

                    {/* البند الثامن والعشرون: إرشادات التفاوض وإتمام الصفقات */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الثامن والعشرون: إرشادات التفاوض وإتمام الصفقات
                    </Typography>
                    <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>مبدأ حسن النية:</strong> يلتزم كل من البائع والمشتري بإجراء المفاوضات بحسن نية، ويراعي الجدية والشفافية، وبما يعكس رغبة حقيقية في إتمام الصفقة، مع الامتناع عن أي ممارسات احتيالية أو مخالفة أو تأخير غير مبرر.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>آلية التفاوض عبر المنصة:</strong>
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تتم المفاوضات الأولية بين الطرفين من خلال نظام المراسلة والعروض داخل المنصة، بما يتيح تبادل المعلومات الأولية وتقديم العروض والردود.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يجوز للطرفين، بعد التواصل المبدئي، الاتفاق على عقد اجتماعات أو زيارات ميدانية لموقع النشاط التجاري أو أي وسيلة أخرى مناسبة لاستكمال التفاوض، بشرط الالتزام التام بأحكام السرية وعدم الإفصاح المنصوص عليها في هذه الاتفاقية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تُعتبر جميع المحادثات والعروض والردود التي تتم عبر المنصة سجلاً إلكترونياً معتمداً يمكن الرجوع إليه في حال حدوث نزاع، ويُعتد به كذلك كتابياً أمام الجهات المختصة.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>طبيعة العروض والقبول:</strong> يُعد تقديم العرض أو القبول عبر المنصة خطوة تفاوضية مبدئية لا ترقى إلى مستوى العقد النهائي الملزم ما لم يتم إبرام عقد مكتوب (ورقي أو إلكتروني) يتضمن تفاصيل الصفقة وشروطها. وتُعتبر العقود النهائية الموقعة بين البائع والمشتري المرجع القانوني الوحيد الملزم للطرفين في تنفيذ الصفقة دون أي التزامات على المنصة.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>استقلالية العلاقة التعاقدية:</strong> لا تُعد المنصة طرفاً في أي اتفاق أو التزام ناشئ بين البائع والمشتري، ولا تتحمل أي مسؤولية عن تنفيذ أو صحة أو نتائج الصفقات المبرمة بين المستخدمين. ويقر الطرفان بأن المنصة تعمل فقط كوسيط إلكتروني لتسهيل التواصل والربط بينهما.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>العمولة ورسوم النجاح:</strong> تبقى المنصة مخولة قانوناً باستيفاء رسوم النجاح (العمولة) من البائع فور إتمام الصفقة، وذلك وفقاً لما هو موضح في البند التاسع من هذه الاتفاقية (سياسة دفع العمولة). كما يقر الطرفان بأن إتمام الصفقة داخل أو خارج المنصة بعد التواصل المبدئي بينهما عبرها، يُعد موجباً لاستحقاق العمولة وفقاً لأحكام الاتفاقية.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>إنهاء أو فشل التفاوض:</strong> يحق لأي من الطرفين الانسحاب من المفاوضات في أي وقت قبل توقيع العقد النهائي، بشرط عدم إساءة استخدام هذا الحق أو استغلاله للإضرار بالطرف الآخر. وفي حال فشل التفاوض أو عدم إتمام الصفقة، تبقى التزامات السرية وعدم الإفصاح سارية المفعول بين الطرفين والمنصة.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>دور المنصة وحدود مسؤوليتها:</strong> تقتصر مسؤولية المنصة على توفير الوسيلة الإلكترونية لتبادل المعلومات والعروض، ولا تمتد بأي حال لمتابعة التنفيذ أو ضمان صحة أو جدية أي طرف. لا تقدم المنصة أي استشارات قانونية أو مالية أو ضريبية، ويقع على عاتق كل طرف مسؤولية إجراء الفحص الذاتي للجهالة (Due Diligence) والحصول على المشورة المتخصصة قبل إبرام الصفقة. لا تتحمل المنصة أي مسؤولية عن الخلافات أو الأضرار الناتجة عن التفاوض أو الاتفاقات أو زيارات المواقع أو اللقاءات التي تتم خارج المنصة.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>سلوك المستخدمين أثناء التفاوض:</strong> يجب أن يلتزم المستخدمون بالسلوك المهني والاحترام المتبادل أثناء المفاوضات، ولا يستخدموا النظام لأغراض غير متعلقة بالصفقة. يحظر استخدام المراسلات أو العروض داخل المنصة للإضرار أو التحايل أو جمع معلومات سرية دون نية حقيقية في الشراء أو البيع.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>تسوية النزاعات الناتجة عن التفاوض:</strong> في حال نشوء أي خلاف بين البائع والمشتري أثناء أو بعد المفاوضات، يتعهد الطرفان بمحاولة تسوية ودية. وإذا تعذر الحل، يكون لكل طرف الحق في اللجوء إلى الجهات القضائية المختصة وفق أحكام البند الثالث والعشرون (الاختصاص القضائي) من هذه الاتفاقية.
                        </Typography>
                    </Box>

                    {/* البند التاسع والعشرون: الاستخدامات المحظورة */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند التاسع والعشرون: الاستخدامات المحظورة
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'left' }}>
                        يحظر على جميع المستخدمين (البائعين والمشترين) استخدام المنصة أو خدماتها في أي من الحالات أو الأفعال التالية:
                    </Typography>
                    <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>تقديم معلومات كاذبة أو مضللة:</strong> يحظر إدخال أو نشر أو مشاركة أي بيانات أو مستندات غير صحيحة أو ناقصة أو مضللة بقصد التأثير على الصفقة أو الإضرار بأي طرف.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الأنشطة المخالفة للأنظمة أو النظام العام:</strong> يحظر استخدام المنصة في أي نشاط مخالف لأنظمة المملكة، أو النظام العام، أو الآداب العامة، بما في ذلك على سبيل المثال لا الحصر:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>غسل الأموال أو تمويل الإرهاب.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>التستر التجاري أو مزاولة أنشطة دون تراخيص.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>بيع أو الترويج لمنتجات أو خدمات محظورة شرعاً أو نظاماً.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>نشر محتوى سياسي أو طائفي أو تحريضي أو يمس الرموز الوطنية أو السيادية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>نشر محتوى إباحي أو عنصري أو يدعو للعنف أو الكراهية.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>التلاعب بالصفقات أو العروض:</strong> يحظر على المستخدم القيام بأي من الأفعال التالية:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>محاولة إتمام الصفقة خارج المنصة للتهرب من العمولة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>إدراج أنشطة وهمية أو صفقات غير حقيقية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>إنشاء عروض أو مزايدات غير جادة لرفع السعر أو جذب الانتباه.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تضليل المستخدمين أو إخفاء معلومات جوهرية عن الصفقة.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الاعتداء على الملكية الفكرية:</strong> يحظر نشر أو استخدام أي محتوى ينتهك حقوق الطبع أو العلامات التجارية أو الأسرار التجارية أو أي حقوق فكرية أخرى لأي طرف.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الأمن السيبراني:</strong>
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحظر محاولة اختراق المنصة أو العبث بأنظمتها أو تجاوز إجراءات الأمان.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحظر نشر أو تحميل فيروسات أو برامج خبيثة أو روابط ضارة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحظر استخدام الروبوتات أو الأدوات الآلية (Bots / Scraping) لجمع البيانات أو إنشاء الحسابات أو زيادة التفاعل بشكل مصطنع.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>التواصل غير المشروع:</strong>
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يُمنع استخدام أدوات المراسلة في المنصة للإساءة أو التشهير أو التهديد أو المضايقة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يُحظر إرسال رسائل غير مرغوبة أو دعايات تسويقية أو مشاركة بيانات تواصل خارجية دون إذن المنصة.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>تعدد الحسابات والتحايل:</strong> يحظر إنشاء أو إدارة أكثر من حساب واحد لغرض غير مشروع، مثل التهرب من الرسوم أو التلاعب بالمشاهدات أو المفاوضات. ويحق للشركة إلغاء جميع الحسابات المرتبطة بالمستخدم المخالف، مع احتفاظها بحقها في التعويض.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>التلاعب بالمشاهدات والإحصاءات:</strong> يُمنع أي سلوك يؤدي إلى تصنيع مصطنع لعدد المشاهدات أو التفاعلات أو الإحصاءات، بما في ذلك:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>الدخول من حسابات متعددة على نفس الطرح.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>استخدام خدمات أو أدوات آلية لرفع الأرقام أو شراء الزيارات.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>نشر روابط أو إعلانات تحفيزية مزيفة بغرض جذب الزوار.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>العقوبات والإجراءات:</strong>
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحق للشركة عند ثبوت أي مخالفة لهذا البند تعليق الحساب أو إلغاؤه فوراً دون إشعار مسبق.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تحتفظ الشركة بحقها في المطالبة بالتعويض عن أي أضرار مباشرة أو غير مباشرة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يتحمل المستخدم المخالف كامل المسؤولية النظامية أمام الجهات المختصة في المملكة.</Typography>
                            </Box>
                        </Typography>
                    </Box>

                    {/* البند الثلاثون: قواعد استخدام خدمة المراسلة */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الثلاثون: قواعد استخدام خدمة المراسلة
                    </Typography>
                    <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>تعريف الخدمة وطبيعتها القانونية:</strong>
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>توفر المنصة نظام مراسلة داخلي للتواصل بين المشترين والبائعين لغرض تقييم الصفقات والتفاوض بشأنها وإتمامها.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تُعتبر جميع المراسلات والرسائل التي تتم من خلال نظام المراسلة الداخلي للمنصة أدلة كتابية صحيحة وصالحة قانونياً لإثبات ما ورد فيها أمام الجهات القضائية المختصة.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الالتزامات العامة عند استخدام خدمة المراسلة:</strong>
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>استخدام خدمة المراسلة حصراً للأغراض المتعلقة بتقييم الصفقات أو التفاوض بشأنها أو إتمامها، وعدم استخدامها لأي أغراض شخصية أو خارج نطاق المنصة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>الالتزام بأسلوب مهني ومحترم في جميع المحادثات، وتجنب استخدام أي عبارات أو محتوى قد يُعتبر مسيئاً أو مهيناً أو استفزازياً أو غير لائق.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>الامتناع عن إرسال أي رسائل مزعجة أو إعلانات غير مرغوبة أو رسائل متسلسلة (Spam) أو أي محتوى غير ذي صلة بالصفقة محل التفاوض.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>الحفاظ على سرية المعلومات المتبادلة عبر المراسلة وعدم مشاركتها أو الكشف عنها إلا في حدود ما تقتضيه أغراض الصفقة محل التفاوض، أو بناءً على موافقة خطية من الطرف الآخر أو المنصة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>الالتزام بالشفافية والجدية في التواصل، وعدم استخدام المراسلة كوسيلة لجمع معلومات أو بيانات لأغراض بحثية أو تنافسية أو تسويقية دون تصريح مسبق من المنصة.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>المحظورات:</strong>
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>إرسال أو مشاركة محتوى فاحش أو إباحي أو تشهيري أو تهديدي أو مسيء.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>ممارسة أي شكل من أشكال التحرش أو التنمر أو التمييز القائم على العرق أو الدين أو الجنس أو أي صفة أخرى محمية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>إرسال فيروسات أو برمجيات خبيثة أو أي تعليمات برمجية ضارة عبر الرسائل.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>استخدام المراسلة لتجاوز نظام الرسوم أو العمولة المقررة من المنصة أو لمحاولة إتمام الصفقة خارجها.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>مشاركة معلومات أو وثائق سرية مع أطراف غير مصرح لهم أو استخدامها لأغراض شخصية أو تنافسية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>استخدام نظام المراسلة لأغراض دعائية أو تسويقية غير متعلقة بالصفقات الفعلية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تبادل معلومات التواصل الخارجية (مثل أرقام الهواتف أو عناوين البريد الإلكتروني أو الروابط الخارجية) قبل الوصول إلى مرحلة متقدمة من الاتفاق أو الوصول إلى مرحلة توقيع العقد النهائي أو دون موافقة مسبقة من المنصة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تُطبق جميع أحكام البند التاسع والعشرون (الاستخدامات المحظورة) على خدمة المراسلة، ويُعد أي استخدام مخالف ضمن المراسلات انتهاكاً لأحكام البند المشار إليه.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>المراقبة والأمان:</strong>
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يجوز للشركة مراقبة المحادثات عند الضرورة لضمان الالتزام بالشروط أو عند الاشتباه بوقوع مخالفة، مع مراعاة خصوصية المستخدمين.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحق للشركة اتخاذ الإجراءات المناسبة، بما في ذلك تعليق الحساب أو إلغاؤه أو إبلاغ الجهات المختصة أو الاحتفاظ بالسجلات لأغراض التحقيق، وفقاً لنظام مكافحة الجرائم المعلوماتية في المملكة العربية السعودية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تلتزم الشركة بالحفاظ على سرية المراسلات وعدم الاطلاع عليها إلا في حدود الضرورة النظامية أو الأمانية أو بناءً على طلب رسمي من الجهات المختصة.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>المسؤولية:</strong>
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يتحمل المستخدم المسؤولية الكاملة عن أي محتوى أو رسائل يرسلها عبر المنصة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحق للشركة اتخاذ ما تراه مناسباً من إجراءات نظامية أو قانونية تجاه أي مستخدم يثبت إساءته لاستخدام نظام المراسلة أو مخالفته لأي من أحكام هذا البند، مع احتفاظها بحقها في المطالبة بالتعويض عن أي أضرار مباشرة أو غير مباشرة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحظر على المستخدم حذف أو تعديل الرسائل أو المرفقات أو المحادثات بقصد إخفاء أو تغيير الحقائق في حال وجود شكوى أو نزاع قائم.</Typography>
                            </Box>
                        </Typography>
                    </Box>

                    {/* البند الواحد والثلاثون: السرية */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الواحد والثلاثون: السرية
                    </Typography>
                    <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>تعريف المعلومات السرية:</strong> تشمل "المعلومات السرية" جميع البيانات أو الوثائق غير العامة التي يتم تبادلها أو الاطلاع عليها من خلال المنصة أو أثناء التفاوض أو إتمام الصفقات، بما في ذلك على سبيل المثال لا الحصر: الخطط التجارية، والسجلات المالية، وقوائم العملاء والموردين، وطرق وأساليب العمل، والاستراتيجيات التسويقية، والبرمجيات، وأي معلومات جوهرية أخرى ذات قيمة تجارية أو تنافسية، سواء كانت مكتوبة أو إلكترونية أو شفهية.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>التزامات المستخدمين:</strong> يلتزم جميع المستخدمين (البائعين والمشترين) بما يلي:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>حماية المعلومات السرية بنفس درجة الحماية التي يطبقونها على معلوماتهم الخاصة، وبحد أدنى وفق معايير الحماية المعقولة والمتعارف عليها.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>استخدام المعلومات السرية فقط لغرض تقييم الصفقة أو التفاوض بشأنها أو إتمامها، وعدم استخدامها لأي أغراض شخصية أو تجارية أخرى.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>عدم الكشف عن المعلومات السرية إلا للموظفين أو المستشارين أو الوكلاء المصرح لهم والذين تربطهم بالمستخدم اتفاقيات سرية مماثلة لا تقل حماية عن هذه الاتفاقية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>اتخاذ جميع الإجراءات اللازمة للحد من الوصول إلى المعلومات السرية واقتصارها على الأطراف المصرح لهم فقط.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>إخطار المنصة فوراً في حال حدوث أو الاشتباه بأي تسريب أو إفصاح غير مصرح به للمعلومات السرية.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>استثناءات السرية:</strong> لا تنطبق التزامات السرية على المعلومات التي:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>أصبحت متاحة للعامة دون خرق هذه الاتفاقية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>كانت معروفة للمستلم قبل استلامها من خلال المنصة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تم تطويرها بشكل مستقل دون الرجوع إلى المعلومات السرية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تم الإفصاح عنها بموجب التزام قانوني أو تنظيمي أو بأمر من جهة مختصة، على أن يتم إخطار الطرف الآخر والمنصة بذلك فوراً كلما أمكن قبل الإفصاح.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>التزامات الشركة (المنصة):</strong> تلتزم الشركة بالمحافظة على سرية جميع البيانات والمعلومات التي يقدمها المستخدمون، وعدم الإفصاح عنها لأي طرف ثالث إلا في الحالات التي تقتضيها القوانين أو الأنظمة أو عند الضرورة لتنفيذ أحكام هذه الاتفاقية. تتخذ الشركة الإجراءات الفنية والتنظيمية اللازمة لحماية المعلومات من الوصول أو الاستخدام غير المصرح به. ومع ذلك، لا تتحمل الشركة أي مسؤولية عن أي تسريب أو إفصاح ناتج عن خطأ المستخدم نفسه أو استخدامه غير الآمن لحساباته أو أجهزته.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>المدة الزمنية للالتزام بالسرية:</strong> يظل التزام الأطراف بالحفاظ على السرية سارياً طول مدة استخدام المنصة ولمدة لا تقل عن سنة بعد إنهاء الحساب أو إتمام الصفقة أو انتهاء العلاقة التعاقدية، أيهما أطول.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>التعويض عن الإخلال بالسرية:</strong> في حال خرق أي طرف للتزامات المتعلقة بالسرية، يحق للطرف المتضرر أو للشركة المطالبة بالتعويض الكامل عن الأضرار المباشرة وغير المباشرة الناتجة عن هذا الإخلال، بالإضافة إلى أي إجراءات نظامية أخرى تراها الشركة مناسبة.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الإفصاح عن الصفقات المكتملة:</strong> في حالة تسجيل الطرح كـ"طرح مباع"، يحق للشركة عرض الطرح في الصفحة العامة للمنصة ووضع عليه شعار (مباع)، مع الاقتضاء بعرض المعلومات الأساسية العامة المتعلقة بالطرح فقط، دون أي تفاصيل مالية أو حساسة. وفي حال رغبة المشتري بإخفاء الطرح من الصفحة العامة، يجب عليه مراسلة المنصة عبر الدعم الفني لطلب إزالته أو إخفائه. ويُعتبر هذا الاستخدام من قبل الشركة استثناءً مشروعاً من التزامات السرية ولا يُعد خرقاً لها.
                        </Typography>
                    </Box>

                    {/* البند الثاني والثلاثون: التزامات اتفاقية عدم الإفصاح (NDA) - مكتمل */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الثاني والثلاثون: التزامات اتفاقية عدم الإفصاح (NDA)
                    </Typography>
                    <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>تعريف المعلومات السرية:</strong> تشمل "المعلومات السرية" جميع البيانات أو الوثائق غير العامة التي يتم تبادلها أو الاطلاع عليها من خلال المنصة أو أثناء التفاوض أو إتمام الصفقات، بما في ذلك - على سبيل المثال لا الحصر - الخطط التجارية، والسجلات المالية، وقوائم العملاء والموردين، وطرق وأساليب العمل، والاستراتيجيات التسويقية، والبرمجيات، وأي معلومات جوهرية أخرى ذات قيمة تجارية أو تنافسية، سواء كانت مكتوبة أو إلكترونية أو شفهية.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الموافقة الضمنية على اتفاقية عدم الإفصاح (NDA):</strong> بمجرد استخدام المنصة أو تبادل أي معلومات من خلالها، يُعد جميع المستخدمين (البائعين والمشترين وممثليهم ومستشاريهم) موافقين ضمنياً على الالتزام باتفاقية عدم إفصاح متبادلة (NDA)، بخصوص أي معلومات سرية يتم تبادلها أو الاطلاع عليها من خلال المنصة أو خارجها أثناء مراحل التفاوض، أو الفحص النافي للجهالة (Due Diligence) أو إتمام الصفقة. وتُعتبر هذه الموافقة ملزمة نظاماً دون الحاجة لتوقيع مستند منفصل.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>التزامات المستخدمين:</strong> يلتزم جميع المستخدمين (البائعين والمشترين) بما يلي:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>حماية المعلومات السرية بنفس درجة الحماية التي يطبقونها على معلوماتهم الخاصة، وبحد أدنى وفق معايير الحماية المعقولة والمتعارف عليها.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>استخدام المعلومات السرية فقط لغرض تقييم الصفقة أو التفاوض بشأنها أو إتمامها، وعدم استخدامها لأي أغراض شخصية أو تجارية أخرى.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>عدم الكشف عن المعلومات السرية إلا للموظفين أو المستشارين أو الوكلاء المصرح لهم والذين تربطهم بالمستخدم اتفاقيات سرية مماثلة لا تقل حماية عن هذه الاتفاقية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>اتخاذ جميع الإجراءات اللازمة للحد من الوصول إلى المعلومات السرية واقتصارها على الأطراف المصرح لهم فقط.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>إخطار المنصة فوراً في حال حدوث أو الاشتباه بأي تسريب أو إفصاح غير مصرح به للمعلومات السرية.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>التزامات الشركة (المنصة):</strong> تلتزم الشركة بالمحافظة على سرية جميع البيانات والمعلومات التي يقدمها المستخدمون، وعدم الإفصاح عنها لأي طرف ثالث إلا في الحالات التي تقتضيها القوانين أو الأنظمة أو عند الضرورة لتنفيذ أحكام هذه الاتفاقية. تتخذ الشركة الإجراءات الفنية والتنظيمية اللازمة لحماية المعلومات من الوصول أو الاستخدام غير المصرح به. ومع ذلك، لا تتحمل الشركة أي مسؤولية عن أي تسريب أو إفصاح ناتج عن خطأ المستخدم نفسه أو استخدامه غير الآمن لحساباته أو أجهزته.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>نطاق الاتفاق والمدة الزمنية:</strong> تشمل اتفاقية عدم الإفصاح جميع المعلومات التي يتم الحصول عليها أثناء التعامل عبر المنصة أو بسببها، سواء كانت مكتوبة أو إلكترونية أو شفهية. يظل التزام الأطراف بالحفاظ على السرية سارياً طول مدة استخدام المنصة ولمدة سنتين (2) بعد إنهاء الحساب أو إتمام الصفقة أو انتهاء العلاقة التعاقدية، أيهما أطول.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الاستثناءات من السرية:</strong> لا تنطبق التزامات السرية على المعلومات التي:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>أصبحت متاحة للعامة دون خرق هذه الاتفاقية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>كانت معروفة للمستلم قبل استلامها من خلال المنصة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تم تطويرها بشكل مستقل دون الرجوع إلى المعلومات السرية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تم الإفصاح عنها بموجب التزام قانوني أو تنظيمي أو بأمر من جهة مختصة، على أن يتم إخطار الطرف الآخر والمنصة بذلك فوراً كلما أمكن قبل الإفصاح.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>المسؤولية والإخلال:</strong> في حال خرق أي طرف – سواء مستخدم أو مستشار أو ممثل – لالتزاماته المتعلقة بالسرية أو الإفصاح، يحق للشركة اتخاذ أي من الإجراءات التالية:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تعليق الحساب أو إنهاؤه فوراً دون إشعار مسبق.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>رفع دعوى تعويض والمطالبة بجميع الحقوق القانونية المتاحة وفق الأنظمة السعودية.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تقديم بلاغ رسمي للجهات المختصة في حال تضمن الخرق معلومات تجارية أو مالية حساسة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>المطالبة بالتعويض الكامل عن الأضرار المباشرة وغير المباشرة الناتجة عن الإخلال.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الإفصاح عن الصفقات المكتملة:</strong> في حالة تسجيل الطرح كـ"طرح مباع"، يحق للشركة عرض الطرح في الصفحة العامة للمنصة ووضع عليه شعار (مباع)، مع الاقتضاء بعرض المعلومات الأساسية العامة المتعلقة بالطرح فقط، دون أي تفاصيل مالية أو حساسة. وفي حال رغبة المشتري بإخفاء الطرح من الصفحة العامة، يجب عليه مراسلة المنصة عبر الدعم الفني لطلب إزالته أو إخفائه. ويُعتبر هذا الاستخدام من قبل الشركة استثناءً مشروعاً من التزامات السرية ولا يُعد خرقاً لها.
                        </Typography>
                    </Box>

                    {/* البند الثالث والثلاثون: إنهاء وتطبيق الحسابات */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الثالث والثلاثون: إنهاء وتطبيق الحسابات
                    </Typography>
                    <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>حق الشركة في الإنهاء أو التطبيق:</strong> يجوز للشركة، دون إشعار مسبق، تطبيق أو إلغاء حساب المستخدم كلياً أو جزئياً في أي من الحالات التالية:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>مخالفة المستخدم لأي بند من هذه الاتفاقية أو لأي نظام أو لائحة سارية في المملكة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>ثبوت قيام المستخدم بأي نشاط احتيالي أو ضار أو محاولة تجاوز نظام الرسوم أو إجراءات التحقق.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>إساءة استخدام المنصة أو الإضرار بسمعتها أو بمستخدميها.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تلقي الشركة بلاغات رسمية من جهات مختصة أو مستخدمين آخرين تتعلق بسلوك المستخدم المخالف.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>حق المستخدم في الإنهاء:</strong> يحق للمستخدم طلب إنهاء حسابه أو تطبيق استخدامه في أي وقت، من خلال إعدادات الحساب أو عبر الدعم الفني، بشرط الوفاء بجميع الالتزامات المالية المستحقة عليه للمنصة أو لأي مستخدم آخر.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>آثار الإنهاء:</strong>
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>عند الإنهاء، تتلاشى جميع الحقوق والتراخيص الممنوحة للمستخدم فوراً.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تبقى التزامات السرية وعدم الإفصاح وسداد الرسوم أو العمولات سارية حتى بعد الإنهاء.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>لا يحق للمستخدم المطالبة بأي تعويض أو استرجاع لأي مبالغ مدفوعة قبل الإنهاء.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>استرجاع البيانات:</strong>
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يمكن للمستخدم، قبل الإنهاء، طلب نسخة من بياناته أو مستنداته خلال مدة لا تتجاوز (30) يوماً من تاريخ الإشعار بالإنهاء.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>بعد هذه المدة، يحق للشركة حذف البيانات أو إخفاء هويتها وفق سياسة الاحتفاظ بالبيانات المعمول بها.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الإجراءات النظامية:</strong>
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تحتفظ الشركة بحقها في اتخاذ أي إجراءات نظامية أو قضائية ضد المستخدم المخالف.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يحق للشركة منع المستخدم من إعادة التسجيل مستقبلاً إذا ثبتت مخالفته أو إساءته لاستخدام المنصة.</Typography>
                            </Box>
                        </Typography>
                    </Box>

                    {/* البند الرابع والثلاثون: تحديد المسؤولية */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الرابع والثلاثون: تحديد المسؤولية
                    </Typography>
                    <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>طبيعة دور المنصة:</strong> تعمل المنصة كوسيط إلكتروني مستقل بهدف إلى الربط بين البائعين والمشترين لتسهيل عمليات تقييم وشراء وبيع الأنشطة التجارية، ولا تُعتبر المنصة أو الشركة المالكة لها طرفاً في أي صفقة يتم إبرامها بين المستخدمين، ولا تتحمل أي مسؤولية عن تنفيذ أو صحة أو التزامات تلك الصفقات.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>نطاق عدم المسؤولية:</strong> لا تتحمل الشركة أي مسؤولية عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية قد تنشأ عن:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>استخدام المنصة أو عدم القدرة على استخدامها.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>أي تصرف أو امتناع من قبل المستخدمين الآخرين.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>أي أخطاء أو بيانات غير دقيقة يقدمها البائع أو المشتري.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>أي خسائر مالية أو تجارية أو فقدان بيانات أو فرص ناتجة عن استخدام المنصة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>أي أعطال فنية أو مشاكل في الاتصال أو انقطاع الخدمة أو الهجمات الإلكترونية الخارجة عن إرادة الشركة.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>مسؤولية المستخدم:</strong> يتحمل المستخدم وحده المسؤولية الكاملة عن كل ما يقوم به من أنشطة داخل المنصة، بما في ذلك دقة المعلومات المقدمة، والصفقات التي يدخل فيها، وأي محتوى أو بيانات يقوم بنشرها أو إرسالها. كما يتحمل المستخدم كامل المسؤولية عن أي أضرار أو خسائر تلحق بالمنصة أو بالمستخدمين الآخرين نتيجة مخالفته لهذه الاتفاقية أو لأي أنظمة سارية.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>حدود المسؤولية القصوى:</strong> في جميع الأحوال، لا تتجاوز مسؤولية الشركة – في حال ثبوتها – الحد الأدنى مما تسمح به القوانين السارية أو المبالغ الفعلية التي دفعها المستخدم مقابل الخدمة محل المطالبة، أيهما أقل.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الاستثناءات من تحديد المسؤولية:</strong> لا يسري تحديد المسؤولية في الحالات التالية:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>إذا ثبت أن الضرر ناتج عن إهمال جسيم أو غش أو سوء نية من الشركة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>إذا أوجبت القوانين أو الأوامر القضائية خلاف ذلك.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الضمانات والتوصيل:</strong> يتم توفير المنصة وخدماتها "كما هي" (As-Is) دون أي ضمانات صريحة أو ضمنية تتعلق بدقة المحتوى أو استمرارية الخدمة أو خلوها من الأخطاء أو الانقطاعات. لا تضمن الشركة تحقيق أي نتائج مالية أو تجارية للمستخدمين، ولا تتحمل أي مسؤولية عن فشل أي صفقة أو انسحاب أي طرف منها.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الإجراءات القانونية والتعويض:</strong>
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>يقر المستخدم بأن أي مطالبة ضد الشركة يجب أن تُرفع خلال مدة لا تتجاوز (سنة واحدة) من تاريخ وقوع الحدث محل المطالبة، وبعدها يُعد حق المطالبة لاغياً.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>تحتفظ الشركة بحقها في الرجوع على المستخدم بالتعويض الكامل عن أي أضرار أو مطالبات أو تكاليف قانونية تتكبدها نتيجة مخالفة المستخدم لهذه الاتفاقية أو لأي أنظمة سارية.</Typography>
                            </Box>
                        </Typography>
                    </Box>

                    {/* البند الخامس والثلاثون: معلومات التواصل */}
                    <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                        البند الخامس والثلاثون: معلومات التواصل
                    </Typography>
                    <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>قنوات التواصل الرسمية:</strong> تعتبر الرسائل التالية هي القنوات الرسمية الوحيدة المعتمدة للتواصل بين الشركة والمستخدمين:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>نظام المراسلة الداخلي داخل المنصة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>البريد الإلكتروني الرسمي للشركة support@isthwath.com</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>صفحة الدعم الفني أو نموذج الاتصال المتاح عبر موقع المنصة الرسمي.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>الإشعارات الإلكترونية أو التنبيهات المرسلة عبر حساب المستخدم داخل المنصة.</Typography>
                            </Box>
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>التواصل من المستخدم:</strong> يجب على المستخدم استخدام القنوات المحددة أعلاه فقط لتقديم الاستفسارات أو الطلبات أو الشكاوى أو الإشعارات الرسمية. لا يُعتد بأي مراسلات أو إشعارات تُرسل عبر وسائل غير رسمية مثل الرسائل الشخصية أو وسائل التواصل الاجتماعي أو المكالمات الهاتفية غير المسجلة. في حال رغب المستخدم بتقديم بلاغ رسمي، يجب عليه القيام بذلك عبر البريد الإلكتروني أو نظام الدعم الفني مع ذكر تفاصيل الحساب وموضوع البلاغ بشكل واضح.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>التواصل من الشركة:</strong> يحق للشركة التواصل مع المستخدم عبر أي من الوسائل التالية:
                            <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>البريد الإلكتروني المسجل في حساب المستخدم.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>الإشعارات أو التنبيهات داخل المنصة.</Typography>
                                <Typography component="li"
                                    sx={{ textAlign: 'left', direction: 'ltr' }}>الرسائل النصية أو البريد الإلكتروني الصادر عن نطاق الشركة الرسمي.</Typography>
                            </Box>
                            وتعتبر أي إشعارات أو رسائل يتم إرسالها عبر هذه الوسائل مبلغة قانونياً ومعدّاً بها بعد مرور (24) ساعة من إرسالها إلكترونياً أو فور ظهورها داخل حساب المستخدم.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>تحديث معلومات التواصل:</strong> يلتزم المستخدم بتحديث بيانات التواصل الخاصة به بشكل مستمر، بما في ذلك عنوان البريد الإلكتروني ورقم الهاتف. لا تتحمل الشركة أي مسؤولية عن عدم وصول الإشعارات أو الرسائل نتيجة إدخال المستخدم بيانات غير صحيحة أو إهماله في تحديثها.
                        </Typography>
                        <Typography component="li"
                            sx={{
                                direction: 'ltr', textAlign: 'left',
                                listStylePosition: 'inside',
                                pl: 2,
                            }}>
                            <strong>الاستخدام لأغراض الدعم الفني:</strong> في حال وجود أي استفسار أو طلب فني أو قانوني، يمكن للمستخدم التواصل مع الشركة عبر القنوات الرسمية المذكورة أعلاه، ويُفضّل أن يكون ذلك من خلال نظام الدعم الفني داخل المنصة لتوثيق الطلبات ومتابعتها.
                        </Typography>
                    </Box>

                    {/* خاتمة الاتفاقية */}
                    <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>
                        تمت صياغة هذه الاتفاقية بتاريخ 2025/09/01 وهي سارية المفعول من هذا التاريخ
                    </Typography>
                    <Typography paragraph sx={{ textAlign: 'center', fontStyle: 'italic' }}>
                        نرحب بكم في منصة استحواذ ونتطلع إلى توفير تجربة مميزة وآمنة لجميع المستخدمين
                    </Typography>
                </Box>
                {/* ملحق مسودة: مذكرة عدم الإفصاح (NDA) */}
                <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>
                    ملحق مسودة: مذكرة عدم الإفصاح (NDA)
                </Typography>

                <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'left' }}>
                    مذكرة عدم الإفصاح (NDA)
                </Typography>
                <Typography variant="h6" sx={{ mt: 3, mb: 2, fontWeight: 'bold', textAlign: 'left' }}>
                    اتفاقية سرية المعلومات الخاصة بمنصة استحواذ
                </Typography>

                <Typography paragraph sx={{ textAlign: 'left', fontStyle: 'italic' }}>
                    تمهيد
                </Typography>
                <Typography paragraph sx={{ textAlign: 'left' }}>
                    حيث إن منصة استحواذ (المملوكة لشركة منصة استحواذ الرقمية، المقيدة بالسجل التجاري رقم [7051862113]) تعمل كوسيط إلكتروني يربط بين البائعين والمشترين لتسهيل عمليات الاستحواذ وبيع وشراء الأنشطة التجارية؛
                </Typography>
                <Typography paragraph sx={{ textAlign: 'left' }}>
                    وحيث إن البائع يرغب في إتاحة معلومات غير عامة/سرية حول الطرح رقم (رقم الطرح) الخاص بـ (اسم النشاط) كما هو مسجل في المنصة للمشتري المحتمل عبر المنصة؛
                </Typography>
                <Typography paragraph sx={{ textAlign: 'left' }}>
                    وحيث إن المشتري المحتمل طلب الاطلاع على تلك المعلومات لأغراض التقييم والفحص النافي للجهالة؛
                </Typography>
                <Typography paragraph sx={{ textAlign: 'left' }}>
                    فقد اتفق الأطراف على إبرام هذه المذكرة وفقاً لما يأتي:
                </Typography>

                <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                    <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                        <strong>البند الأول: تعريف الأطراف والطرح</strong>
                        <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 1 }}>
                                <strong>الطرف الأول (المنصة):</strong> شركة منصة استحواذ الرقمية – المالكة والمشغلة لمنصة "استحواذ".
                            </Typography>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 1 }}>
                                <strong>الطرف الثاني (البائع):</strong> اسم البائع (______) كما هو مسجل في المنصة وبصفته مالك/مفوض بالتصرف في اسم النشاط (______) كما هو مسجل في المنصة رقم الطرح (______).
                            </Typography>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 1 }}>
                                <strong>الطرف الثالث (المشتري المحتمل):</strong> اسم المشتري كما هو مسجل في المنصة.
                            </Typography>
                        </Box>
                        ويُشار إلى الجميع معاً بـ "الأطراف".
                    </Typography>

                    <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                        <strong>البند الثاني: تعريف المعلومات السرية ونطاقها</strong>
                        <Typography paragraph sx={{ textAlign: 'left' }}>
                            يقصد بـ المعلومات السرية كل ما يخص الطرح المشار إليه أعلاه مما يتم إتاحته عبر المنصة أو خارجها أثناء التقييم، بأي وسيلة (ورقية/إلكترونية/شفهية)، ويشمل على سبيل المثال لا الحصر: البيانات المالية والضريبية، العقود، السجلات التشغيلية، قواعد العملاء والموردين، الملكية الفكرية، تفاصيل الامتثال، تقارير الفحص، النماذج، العروض، المراسلات، وأي ملفات داخل غرفة البيانات أو المرفقات.
                        </Typography>
                        <Typography paragraph sx={{ textAlign: 'left' }}>
                            كما يشمل ذلك معلومات المشتري التي قد يقدمها للبائع (خطط تمويلية، تقييمات، هيكل صفقة).
                        </Typography>
                    </Typography>

                    <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                        <strong>البند الثالث: المستلمون المسموح لهم</strong>
                        <Typography paragraph sx={{ textAlign: 'left' }}>
                            يجوز للمشتري مشاركة المعلومات السرية فقط مع موظفيه/مستشاريه المهنيين الضروريين لإتمام التقييم (مستشارون قانونيون/محاسبون/مستشارو صفقات) بشرط:
                        </Typography>
                        <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                            <Typography component="li" sx={{ textAlign: 'left' }}>أ) أن تكون مشاركتهم على قدر الحاجة فقط (Need-to-Know).</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>ب) أن يرتبطوا باتفاقيات سرية لا تقل حماية عن هذه المذكرة.</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>ج) يبقى المشتري مسؤولاً عن أي إخلال يصدر عنهم.</Typography>
                        </Box>
                    </Typography>

                    <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                        <strong>البند الرابع: الاستخدام المسموح والقيود</strong>
                        <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                            <Typography component="li" sx={{ textAlign: 'left' }}>أ) استخدام المعلومات حصرياً لغرض تقييم الصفقة المتعلقة بالطرح المشار إليه أعلاه ولا تُستخدم لأي غرض شخصي أو تنافسي أو تسويقي.</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>ب) يحظر نسخ أو تنزيل أو إعادة توزيع أو نشر المعلومات خارج المنصة إلا في حدود ما يلزم للتقييم وبذات الحماية.</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>ج) يحظر التواصل المباشر خارج المنصة مع موظفي/عملاء/موردي الطرف الآخر الذين تم التعرف عليهم عبر المعلومات السرية دون موافقة كتابية مسبقة لمدة 12 شهراً.</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>د) يحظر الالتفاف على المنصة بإبرام الصفقة خارجها بغرض تجنب الرسوم؛ وتظل سياسة العمولة في الشروط والأحكام واجبة التطبيق.</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>هـ) أرشفة عملية الاطلاع عبر المنصة قدر الإمكان (سجل تدفق/تاريخ/صلاحيات).</Typography>
                        </Box>
                    </Typography>

                    <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                        <strong>البند الخامس: الاستثناءات</strong>
                        <Typography paragraph sx={{ textAlign: 'left' }}>
                            لا تُعد المعلومات سرية إذا:
                        </Typography>
                        <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                            <Typography component="li" sx={{ textAlign: 'left' }}>1. أصبحت متاحة للعامة دون إخلال بهذه المذكرة.</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>2. كانت بحوزة الطرف المقدم قبل الإفصاح بوسيلة موثوقة.</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>3. حصل عليها من مصدر مشروع بدون الإفصاح.</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>4. طلب الإفصاح بها نظاماً من جهة مختصة داخل المملكة؛ على أن يُخطر الطرف المقدم والمنصة فوراً من أمكن وقبل الإفصاح.</Typography>
                        </Box>
                    </Typography>

                    <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                        <strong>البند السادس: مدة الالتزام ونطاقه</strong>
                        <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                            <Typography component="li" sx={{ textAlign: 'left' }}>أ) يبدأ الالتزام من تاريخ الموافقة الإلكترونية على هذه المذكرة داخل المنصة، ويستمر طول فترة الوصول للمعلومات ولمدة سنتين (2) بعد ذلك أو بعد إلغاء/إنهاء الحساب أو انتهاء التفاوض، أيهما أطول.</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>ب) تبقى التزامات السرية نافذة سواء تم إتمام الصفقة من عدم.</Typography>
                        </Box>
                    </Typography>

                    <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                        <strong>البند السابع: إعادة/إتلاف المعلومات</strong>
                        <Typography paragraph sx={{ textAlign: 'left' }}>
                            عند طلب البائع أو عند انتهاء الغرض، يلتزم المشتري ومن تحت إشرافه برد أو إتلاف جميع النسخ (بما فيها الإلكترونية/الاحتياطية القابلة للوصول) واستصدار إقرار كتابي بالإتلاف، مع السماح بالاحتفاظ بنسخة آمنة لأغراض الامتثال القانوني فقط إذا لزم.
                        </Typography>
                    </Typography>

                    <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                        <strong>البند الثامن: عدم الاعتماد والتزامات الفحص</strong>
                        <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                            <Typography component="li" sx={{ textAlign: 'left' }}>أ) يقر المشتري أن المعلومات مقدمة "كما هي" دون أي ضمانات من المنصة، وأن عليه إجراء الفحص النافي للجهالة على مسؤوليته.</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>ب) لا تعتبر هذه المذكرة/المعلومات عرضاً مُلزماً للبيع أو وعداً بالتعاقد. المرجع الوحيد الملزم هو عقد البيع النهائي إن تم توقيعه.</Typography>
                        </Box>
                    </Typography>

                    <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                        <strong>البند التاسع: الإخلال والعلاجات</strong>
                        <Typography paragraph sx={{ textAlign: 'left' }}>
                            عند أي إخلال من أي طرف أو من مستلميه المسموحين:
                        </Typography>
                        <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                            <Typography component="li" sx={{ textAlign: 'left' }}>1. يحق للطرف المتضرر والمنصة اتخاذ الإجراءات اللازمة، بما في ذلك تعليق/إلغاء الحساب فوراً، والمطالبة بالتعويض عن الأضرار المباشرة وغير المباشرة، وإبلاغ الجهات المختصة عند الحاجة.</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>2. يُعد الإخلال محاولة صريحة لخرق اتفاقية الشروط والأحكام وسياسة الخصوصية الخاصة بالمنصة.</Typography>
                        </Box>
                    </Typography>

                    <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                        <strong>البند العاشر: العلاقة مع الشروط والأحكام</strong>
                        <Typography paragraph sx={{ textAlign: 'left' }}>
                            تُعد هذه المذكرة جزءاً لا يتجزأ من اتفاقية الشروط والأحكام وسياسة الخصوصية لمنصة استحواذ، ويُعمل بالنص الأكثر حماية للمعلومات السرية عند التعارض.
                        </Typography>
                    </Typography>

                    <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                        <strong>البند الحادي عشر: القانون والاختصاص</strong>
                        <Typography paragraph sx={{ textAlign: 'left' }}>
                            تخضع هذه المذكرة لأنظمة المملكة العربية السعودية، ويكون الاختصاص القضائي لمحاكم مدينة الرياض دون غيرها.
                        </Typography>
                    </Typography>

                    <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                        <strong>البند الثاني عشر: القبول والتوقيع الإلكتروني</strong>
                        <Typography paragraph sx={{ textAlign: 'left' }}>
                            يُعد ضغط الزر "وافق" على مذكرة عدم الإفصاح الخاصة بالطرح المشار إليه أعلاه داخل المنصة قبولاً وتوقيعاً إلكترونياً ملزماً وفق نظام التعاملات الإلكترونية السعودي، وتُحفظ جميع السجلات والإجراءات في سجل إلكتروني معتمد لدى المنصة.
                        </Typography>
                        <Typography
                            paragraph
                            variant='h5'
                            sx={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                mt: 2,
                                color: 'gray',
                                borderBottom: '3px double gray',
                                pb: 1,
                                display: 'inline-block'
                            }}
                        >
                            تم إقرار هذه المذكرة إلكترونياً عبر منصة استحواذ، وهي سارية المفعول اعتباراً من تاريخ قبول المستخدم لها داخل النظام.
                        </Typography>
                    </Typography>
                </Box>

                {/* ملحق مسودة: وثيقة العرض النهائي */}
                <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>
                    ملحق مسودة: وثيقة العرض النهائي
                </Typography>

                <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>
                    وثيقة العرض النهائي المتفق عليها (Final Agreed Offer)
                </Typography>
                <Typography variant="h6" sx={{ mt: 3, mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
                    منصة استحواذ
                </Typography>

                <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                    <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                        <strong>البند الأول: تمهيد</strong>
                        <Typography paragraph sx={{ textAlign: 'left' }}>
                            بناءً على المفاوضات التي تمت بين البائع والمشتري عبر منصة استحواذ، والمقيدة بالسجل التجاري رقم (7051862113)، وبعد الاطلاع على اتفاقية الشروط والأحكام وسياسة الخصوصية الخاصة بالمنصة، والتزام الطرفين بما ورد فيها، فقد تم التوصل إلى اتفاق نهائي بشأن العرض الموضع أدناه، والذي يعد بمثابة وثيقة توفيق إلكترونية مبدئية توثق الشروط التجارية المتفق عليها بين الطرفين داخل المنصة، تمهيداً لتوقيع عقد البيع أو الاستحواذ الرسمي.
                        </Typography>
                    </Typography>

                    <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                        <strong>البند الثاني: بيانات العرض والشروط المتفق عليها</strong>
                        <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                            <Typography component="li" sx={{ textAlign: 'left' }}>• رقم الطرح: (_____)</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>• رقم العرض النهائي: (_____)</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>• اسم النشاط التجاري: (_____) كما هو مسجل في المنصة</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>• تصنيف النشاط: (_____)</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>• نوع النشاط: (_____)</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>• اسم البائع: (_____) كما هو مسجل في المنصة</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>• اسم المشتري: (_____) كما هو مسجل في المنصة</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>• موقع النشاط: (_____)</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>• تاريخ اعتماد العرض النهائي: (_____)</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>• القيمة الإجمالية المتفق عليها: (_____) ريال سعودي</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>• رقم المراجعة: (_____)</Typography>
                        </Box>

                        <Typography paragraph sx={{ textAlign: 'left', mt: 2 }}>
                            <strong>شروط المشتري والموافق عليها من قبل البائع (إن وجد)</strong>
                        </Typography>
                        <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                            <Typography component="li" sx={{ textAlign: 'left' }}>1-</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>2-</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>3-</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>4-</Typography>
                        </Box>

                        <Typography paragraph sx={{ textAlign: 'left', mt: 2 }}>
                            <strong>شروط البائع والموافق عليها من قبل المشتري (إن وجد)</strong>
                        </Typography>
                        <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                            <Typography component="li" sx={{ textAlign: 'left' }}>1-</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>2-</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>3-</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>4-</Typography>
                        </Box>
                    </Typography>

                    <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                        <strong>البند الثالث: الشروط الأساسية للعرض النهائي</strong>
                        <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                                <strong>نطاق العرض:</strong> يشمل هذا العرض جميع العناصر التي تم الاتفاق عليها بين الطرفين والمتعلقة بالنشاط التجاري موضوع الطرح، بما في ذلك الأصول المادية وغير المادية، التراخيص، العقود، العملاء، العلامات التجارية، والالتزامات المعلنة من قبل البائع.
                            </Typography>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                                <strong>السعر وطريقة السداد:</strong> يشمل هذا العرض جميع الأصول الملموسة وغير الملموسة المتعلقة بالنشاط التجاري والمذكورة في بيانات الطرح المشار إليه أعلاه، بما في ذلك الأصول المدرجة والمذكورة في المنصة وقت إبرام هذا العرض.
                            </Typography>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                                <strong>نطاق الأصول والموجودات المشمولة في الصفقة:</strong>
                                <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>أ) يشمل العرض الأصول الملموسة وغير الملموسة والمذكورة في الأصول في الطرح المشار إليه أعلاه.</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>ب) لا تشمل الصفقة أي أصول أو التزامات لم يُفصح عنها صراحة في هذه الوثيقة أو تم استثناؤها كتابة من قبل البائع.</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>ج) لا تشمل الصفقة أي أصول أو التزامات لم يُفصح عنها صراحة في هذا العرض أو تم استثناؤها كتابة من قبل البائع أو اتفق الطرفان لاحقاً على استبعادها في العقد النهائي.</Typography>
                                </Box>
                            </Typography>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                                <strong>الالتزامات والديون:</strong>
                                <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>أ) يقر البائع بأنه قد أفصح عن جميع الديون والقروض والالتزامات القائمة المتعلقة بالنشاط التجاري، وفقاً للبند (27) من الشروط والأحكام.</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>ب) يتحمل البائع أي التزامات غير معلنة أو قضايا لم يُفصح عنها قبل توقيع العقد النهائي.</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>ج) تنتقل الالتزامات النظامية إلى المشتري فقط بعد توقيع العقد الرسمي واستلام الأصول.</Typography>
                                </Box>
                            </Typography>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                                <strong>الفحص النافي للجهالة (Due Diligence):</strong>
                                <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>أ) أجرى المشتري فحصه القانوني والمالي والتشغيلي وفقاً للبند (27) من الشروط والأحكام.</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>ب) يقر المشتري بأنه يتحمل كامل المسؤولية عن قراره في الشراء بناءً على هذا الفحص، وأن المنصة ليست طرفاً في أي التزامات أو ضمانات ناتجة عنه.</Typography>
                                </Box>
                            </Typography>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                                <strong>السرية وحماية البيانات:</strong>
                                <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>أ) يلتزم الطرفان بالامتثال لأحكام مذكرة عدم الإفصاح (إن وجدت) والبند (32, 31) من الشروط والأحكام – السرية و NDA.</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>ب) تبقى جميع المعلومات المتبادلة أثناء التفاوض سرية وغير قابلة للنشر أو الإفشاء إلا بموافقة الطرف الآخر أو وفق متطلبات نظامية.</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>ج) يحق للمنصة الاحتفاظ بنسخة من هذا العرض لأغراض التوثيق دون الكشف عن تفاصيله للغير.</Typography>
                                </Box>
                            </Typography>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                                <strong>العمولات ورسوم النجاح:</strong>
                                <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>أ) يقر الطرفان بأن المنصة تستحق عمولة بنسبة (5%) من إجمالي قيمة الصفقة عند إتمام البيع، وفقاً للبند التاسع من الشروط والأحكام.</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>ب) تُدفع العمولة من قبل البائع فور اعتماد الصفقة كـ "مباعة" داخل النظام.</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>ج) في حال محاولة تنفيذ الصفقة خارج المنصة للتهرب من الرسوم، يحق للشركة فرض غرامة تعويضية لا تقل عن ضعف العمولة المستحقة، والمطالبة بالتعويض عن أي ضرر آخر.</Typography>
                                </Box>
                            </Typography>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                                <strong>تنفيذ الصفقة ونقل الملكية:</strong>
                                <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>أ) يتم توقيع العقد النهائي بين البائع والمشتري بعد اعتماد هذا العرض، ويُعتبر العقد الرسمي هو المرجع الملزم للطرفين في تنفيذ عملية البيع.</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>ب) يتحمل كل طرف مسؤولياته النظامية المتعلقة بإتمام الإجراءات الحكومية، مثل تحديث السجل التجاري أو نقل الرخص أو العقود.</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>ج) يحق للمنصة إظهار الطرح في الصفحة العامة بعد اعتماده كـ "مباع"، وفق البند (32) من الاتفاقية.</Typography>
                                </Box>
                            </Typography>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                                <strong>الإخلال بالشروط:</strong>
                                <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>أ) يحق للمنصة تعليق أو إلغاء الصفقة إذا ثبت وجود تحايل أو تلاعب أو تقديم معلومات كاذبة.</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>ب) لا تتحمل المنصة أي التزامات مالية أو قانونية بين الأطراف الناتجة عن إخلال أحدهم.</Typography>
                                </Box>
                            </Typography>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                                <strong>الاختصاص القضائي:</strong> تخضع هذه الوثيقة لأنظمة ولوائح المملكة العربية السعودية، ويكون الاختصاص القضائي لمحاكم مدينة الرياض.
                            </Typography>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                                <strong>علاقة المنصة بالصفقة:</strong> تعمل المنصة كوسيط إلكتروني فقط، ولا تعد طرفاً في الصفقة المبرمة بين البائع والمشتري، ولا تتحمل أي مسؤولية عن صحة أو دقة المعلومات أو عن أي أضرار مالية أو نظامية تنشأ عن الاتفاق أو تنفيذه.
                            </Typography>
                        </Box>
                    </Typography>

                    <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                        <strong>البند الرابع: موافقة واعتماد الأطراف</strong>
                        <Typography paragraph sx={{ textAlign: 'left' }}>
                            يقر الطرفان (البائع والمشتري) بأنهما:
                        </Typography>
                        <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                            <Typography component="li" sx={{ textAlign: 'left' }}>1. اطلعا على هذه الوثيقة بجميع تفاصيلها وشروطها الأساسية.</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>2. واقفان على الالتزام الكامل بما ورد فيها.</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>3. يدركان أن هذه الوثيقة لا تُعد عقداً بيعياً، وإنما اتفاقاً تمهيدياً يوثق السعر والشروط النهائية قبل توقيع العقد الرسمي.</Typography>
                            <Typography component="li" sx={{ textAlign: 'left' }}>4. أن جميع بنودها تخضع مباشرة لأحكام اتفاقية الشروط والأحكام وسياسة الخصوصية الخاصة بمنصة استحواذ.</Typography>
                        </Box>
                    </Typography>

                    <Typography component="li" sx={{ textAlign: 'left', mb: 2 }}>
                        <strong>البند الخامس: التوقيع الإلكتروني واعتماد العرض النهائي</strong>
                        <Box component="ol" sx={{ pr: 2, textAlign: 'left' }}>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 1 }}>
                                يُعتبر إرسال المشتري للعرض النهائي عبر المنصة، متضمناً السعر النهائي وقبوله لجميع شروط البائع، بمثابة توقيع إلكتروني رسمي وملزم من المشتري على العرض ومحتواه.
                            </Typography>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 1 }}>
                                كما يُعتبر قبول البائع للعرض النهائي عبر المنصة، متضمناً موافقة على السعر النهائي وشروط المشتري، موافقة إلكترونية نهائية وملزمة تُعد في حكم التوقيع القانوني الكامل.
                            </Typography>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 1 }}>
                                يُعد اكتمال الخطوات الآتية بمثابة توقيع إلكتروني متبادل بين الطرفين على العرض النهائي:
                                <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>أ) قيام المشتري بإرسال العرض النهائي بالسعر المحدد مع قبوله لشروط البائع.</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>ب) قيام البائع باستلام العرض عبر المنصة.</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>ج) قيام البائع بقبول السعر النهائي والموافقة على شروط المشتري.</Typography>
                                </Box>
                            </Typography>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 1 }}>
                                تُعتمد هذه الإجراءات مجتمعة كإجراء رسمي للقبول والتوقيع، وتُعتبر جميع العمليات الإلكترونية المسجلة بشأن العرض النهائي موثقة ومؤرشفة ومحمية بموجب نظام التعاملات الإلكترونية السعودي واتفاقية الشروط والأحكام الخاصة بالمنصة.
                            </Typography>
                            <Typography component="li" sx={{ textAlign: 'left', mb: 1 }}>
                                تحتفظ المنصة بسجل إلكتروني معتمد يحتوي على كافة تفاصيل العملية، بما في ذلك:
                                <Box component="ul" sx={{ pr: 2, textAlign: 'left' }}>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>○ رقم الطرح ورقم العرض النهائي</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>○ بيانات الطرفين (البائع والمشتري)</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>○ السعر النهائي المتفق عليه</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>○ الشروط النهائية للطرفين</Typography>
                                    <Typography component="li" sx={{ textAlign: 'left' }}>○ تاريخ ووقت الإرسال والقبول</Typography>
                                </Box>
                                ويُعد هذا السجل دليلًا قانونياً فاطعاً لآليات التوقيع الإلكتروني للطرفين أمام الجهات المختصة.
                            </Typography>
                        </Box>
                    </Typography>
                </Box>

                {/* خاتمة الملاحق */}
                <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>
                    نهاية الملاحق - تمت جميع بنود الاتفاقية والملاحق
                </Typography>
            </Box>
        </Container>
    );
}