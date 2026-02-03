        /* ==========================================
           中英文切换 i18n
           ========================================== */
        window.currentLang = localStorage.getItem('toothhelper-lang') || 'zh';
        
        const I18N = {
            zh: {
                title: 'ToothHelper | 数字口腔医疗影像系统',
                noThirdParty: '系统不会将您的数据发送给任何第三方',
                smartOralSystem: '智能口腔健康系统',
                apiCall: 'API调用',
                aboutUs: '关于我们',
                heroDesc: '基于深度学习的计算机视觉技术（DuYa Model），1分钟内快速完成全口健康状况分析。请按照标准上传3张牙齿照片以启动分析。',
                helloAssistant: '您好！我是您的<br/>智能口腔助手',
                userCountPrefix: 'ToothHelper已为 ',
                userCountSuffix: ' 名用户提供口腔健康指导',
                userCountSuffixDesktop: ' 名用户提供了口腔健康指导',
                viewGuide: '查看标准拍摄指南',
                viewGuideButton: '<i class="fa-solid fa-camera"></i> 查看标准拍摄指南',
                upperView: '上颌面视角',
                frontView: '正面牙列视角',
                lowerView: '下颌面视角',
                retake: '点击重拍',
                startAnalysis: '启动智能检测',
                analyzing: '分析中...',
                analysisDone: '检测完成',
                serverOk: '服务器连接正常',
                modelName: 'DuYa口腔大模型 V1.5.1',
                updatedAt: '更新时间 Jun 30, 2026',
                agreement: '我已阅读并同意',
                agreementLink: '系统说明与用户服务协议',
                disclaimer: '免责声明：本系统提供的口腔健康分析仅供参考，不能替代专业医生的诊断和治疗建议。如有口腔问题，请及时就医咨询专业口腔医生。本系统分析结果的准确性受拍摄质量、光线条件等多种因素影响，使用者应理性看待分析结果。',
                detectResult: '查看检测结果',
                viewReport: '查看专业版报告',
                shareReport: '分享报告',
                zoomIn: '点击放大',
                detecting: '正在检测',
                kinds: '可识别问题种类',
                kindsDesktop: '可识别疾病种类',
                stat10Value: '10种',
                accuracy: '综合识别准确率',
                timeCost: '分析耗时',
                params: '模型参数量',
                encryption: '数据对称加密存储',
                satisfaction: '用户满意度',
                efficiency: '就诊效率提升',
                clickTip: '点击切换提示',
                smartTerminal: '智能口腔终端',
                detectingInProgress: '智能检测进行中',
                surveyTitle: '用户体验调研',
                surveyIntro: '请回答以下3个问题，帮助我们改进服务',
                submitSurveyBtn: '提交问卷并查看报告',
                apiModalTitle: 'API 调用申请',
                apiModalIntro: '我们已开放 API 调用功能，欢迎申请接入',
                apiFeaturesTitle: '开放的 API 功能',
                apiFeature1: '• 口腔影像(口内照、CBCT、IOS)智能疾病识别接口',
                apiFeature2: '• 牙齿 FDI 编号自动标注接口',
                apiFeature3: '• 口腔影像智能分析报告生成接口',
                apiFeature4: '• 口腔数字化重建(口内照、CBCT、IOS)接口',
                apiFeature5: '• 其他定制化需求',
                contactPhone: '联系手机',
                apiPhonePlaceholder: '请输入11位手机号',
                applicationScenario: '应用场景',
                selectScenario: '请选择应用场景',
                scenarioHospital: '公立医院',
                scenarioClinic: '私立诊所',
                scenarioCompany: '科技企业',
                scenarioResearch: '科研机构',
                scenarioOther: '其他',
                notesOptional: '备注说明（选填）',
                notesPlaceholder: '请简要描述您的使用需求...',
                apiSubmitNote: '<i class="fa-solid fa-info-circle mr-2"></i>提交后，我们的技术团队将在 <strong>1-2个工作日内</strong> 与您联系，提供 API 密钥及接入文档。',
                cancel: '取消',
                submit: '提交申请',
                apiContact: '如有疑问，请联系我们：',
                aboutModalTitle: '关于我们',
                aboutTagline: '用AI重新定义口腔健康的未来',
                aboutVision: '我们的愿景',
                aboutVisionText: '在 ToothHelper，我们相信科技的力量能让专业的口腔诊断变得触手可及。我们致力于通过 DuYa 口腔大模型，将顶尖的 AI 算法与深度学习技术融合，为每一位用户提供精准、快速且便捷的数字化口腔健康方案。',
                aboutTeam: '顶尖跨学科团队',
                aboutTeamIntro: '我们的团队是创新的引擎，由来自 Columbia University、University of North Carolina、The University of Sydney、The University of Hong Kong 的精英骨干组成，汇集了人工智能、医学影像、临床医学的多领域专家。',
                aboutAI4M: 'AI4M 团队',
                aboutAI4MText: '深耕计算机视觉（CV）与大语言模型（LLM）领域，自主研发DuYa Oral Foundation Model，实现对口腔疾病的精准识别与分析。',
                aboutClinical: '临床医学团队',
                aboutClinicalText: '拥有深厚的医学背景与临床经验，将临床医学逻辑融入算法开发，提升模型的临床适用性。',
                aboutWhy: '为什么选择 ToothHelper？',
                aboutCard1Title: '学术驱动的创新',
                aboutCard1Text: '背靠顶尖学府的科研环境，技术方案经过反复验证与迭代，始终走在行业前沿。',
                aboutCard2Title: '全栈自研技术',
                aboutCard2Text: '从算法模型到云端部署，掌握完整的核心技术闭环。',
                aboutCard3Title: '以人为本的初衷',
                aboutCard3Text: '致力于提供最有温度的智能医疗体验，无论临床还是居家。',
                aboutContact: '联系我们',
                close: '关闭',
                detected: '已检测',
                apiSuccessAlert: '申请提交成功！\n我们的技术团队将在1-2个工作日内与您联系。\n\n感谢您的关注！',
                viewReportAlert: '跳转到专业版报告页面',
                shareReportTitle: 'ToothHelper 口腔健康报告',
                shareReportText: '我刚完成了智能口腔健康分析，快来看看我的报告！',
                shareFallbackAlert: '分享功能：复制链接或生成分享海报',
                diseaseModalTitle: '可识别的10种口腔问题',
                diseaseModalIntro: 'DuYa口腔大模型已训练识别以下常见口腔问题',
                diseaseGotIt: '我知道了',
                d1Name: '龋齿', d1Desc: '牙齿硬组织的细菌性疾病',
                d2Name: '残冠', d2Desc: '牙冠大部分缺损的残留牙根',
                d3Name: '牙磨损', d3Desc: '牙齿表面的物理性磨耗',
                d4Name: '楔状缺损', d4Desc: '牙颈部硬组织缺损',
                d5Name: '牙龈退缩', d5Desc: '牙龈组织向根方退缩',
                d6Name: '氟牙症', d6Desc: '氟摄入过量导致的牙齿发育缺陷',
                d7Name: '牙列拥挤', d7Desc: '牙齿排列空间不足导致的拥挤',
                d8Name: '牙齿颜色', d8Desc: '牙齿色泽异常改变',
                d9Name: '牙结石', d9Desc: '钙化的牙菌斑沉积物',
                d10Name: '牙龈炎', d10Desc: '牙龈组织的炎症',
                tutorialTitle: '标准拍摄方法',
                methodOther: '他人帮拍(推荐)',
                methodSelf: '前置自拍',
                tutorialOtherTip: '<i class="fa-solid fa-info-circle mr-2"></i>建议由他人协助拍摄，可获得更清晰稳定的影像',
                shootUpper: '上颌拍摄', shootFront: '正面拍摄', shootDown: '下颌拍摄',
                otherUpperDesc: '抬头并大张嘴，拍摄者从斜下方拍摄，确保拍全所有上排牙齿的面。',
                otherFrontDesc: '平视前方，上下牙稍微分开一点间隙，拍摄者正对嘴部拍摄牙齿外侧面。',
                otherDownDesc: '低头并大张嘴，舌头向上卷曲，拍摄者从斜上方拍摄，清晰呈现下排牙齿的咬合面。',
                tutorialPoints: '拍摄要点',
                point1Title: '充足照明',
                point1Desc: '请在自然光充足处拍摄，或开启闪光灯。确保牙龈边缘清晰无阴影。',
                point2Title: '精确对焦',
                point2Desc: '点击屏幕对焦于牙齿表面。模糊的影像会导致 AI 分析失败。',
                point3Title: '完整视角',
                point3Desc: '拍摄上下颌面时请最大程度张口，确保能看到最后一颗磨牙，并保持稳定。',
                tutorialSelfTip: '<i class="fa-solid fa-triangle-exclamation mr-2"></i>自拍模式需注意保持手机稳定。',
                selfUpperDesc: '手机屏幕朝向面部并斜向上仰，头往后仰张大嘴，对准上排牙齿面。',
                selfFrontDesc: '看着手机屏幕，上下牙稍稍分开一点缝隙，让镜头水平正对着牙齿中心。',
                selfDownDesc: '手机屏幕朝向面部并斜向下倾，低头张大嘴，舌头向上卷曲，对准下排牙齿面。',
                point2SelfTitle: '保持稳定',
                point2SelfDesc: '确保手机稳定，避免抖动和模糊。',
                point3SelfTitle: '调整距离',
                point3SelfDesc: '保持20-30cm的拍摄距离，确保牙齿清晰可见且不变形。',
                point1SelfDesc: '确保光线充足，避免阴影和反光。'
            },
            en: {
                title: 'ToothHelper | Digital Oral Healthcare Imaging',
                noThirdParty: 'Your data is never shared with third parties',
                smartOralSystem: 'Smart Oral Health System',
                apiCall: 'API Access',
                aboutUs: 'About Us',
                heroDesc: 'Deep learning-based computer vision (DuYa Model) completes full-mouth health analysis in under 1 minute. Upload 3 standard tooth photos to start.',
                helloAssistant: 'Hi! I\'m your<br/>Smart Oral Assistant',
                userCountPrefix: 'ToothHelper has served ',
                userCountSuffix: ' users with oral health guidance',
                userCountSuffixDesktop: ' users with oral health guidance',
                viewGuide: 'View Shooting Guide',
                viewGuideButton: '<i class="fa-solid fa-camera"></i> View Shooting Guide',
                upperView: 'Upper Occlusal View',
                frontView: 'Front View',
                lowerView: 'Lower Occlusal View',
                retake: 'Retake',
                startAnalysis: 'Start Analysis',
                analyzing: 'Analyzing...',
                analysisDone: 'Done',
                serverOk: 'Server connected',
                modelName: 'DuYa Oral Model V1.5.1',
                updatedAt: 'Updated Jun 30, 2026',
                agreement: 'I have read and agree to the ',
                agreementLink: 'Terms & User Agreement',
                disclaimer: 'Disclaimer: This analysis is for reference only and does not replace professional diagnosis. Please consult a dentist for oral health issues. Accuracy depends on photo quality and lighting.',
                detectResult: 'View Results',
                viewReport: 'View Full Report',
                shareReport: 'Share',
                zoomIn: 'Zoom',
                detecting: 'Detecting',
                kinds: 'Detectable conditions',
                kindsDesktop: 'Detectable<br/>conditions',
                stat10Value: '10',
                accuracy: 'Accuracy',
                timeCost: 'Analysis time',
                params: 'Model size',
                encryption: 'Encryption<br/>standard',
                satisfaction: 'User<br/>satisfaction',
                efficiency: 'Efficiency<br/>gain',
                clickTip: 'Click for tips',
                smartTerminal: 'Smart Oral Terminal',
                detectingInProgress: 'Analysis in progress',
                surveyTitle: 'User Survey',
                surveyIntro: 'Please answer 3 questions to help us improve',
                submitSurveyBtn: 'Submit & View Report',
                apiModalTitle: 'API Access Request',
                apiModalIntro: 'API access is now available. Apply to integrate.',
                apiFeaturesTitle: 'Available API Features',
                apiFeature1: '• Oral imaging (intraoral, CBCT, IOS) disease recognition',
                apiFeature2: '• Tooth FDI numbering auto-annotation',
                apiFeature3: '• Oral imaging analysis report generation',
                apiFeature4: '• Oral digital reconstruction (intraoral, CBCT, IOS)',
                apiFeature5: '• Custom requirements',
                contactPhone: 'Phone',
                apiPhonePlaceholder: 'Enter 11-digit phone number',
                applicationScenario: 'Use case',
                selectScenario: 'Select use case',
                scenarioHospital: 'Public hospital',
                scenarioClinic: 'Private clinic',
                scenarioCompany: 'Tech company',
                scenarioResearch: 'Research institution',
                scenarioOther: 'Other',
                notesOptional: 'Notes (optional)',
                notesPlaceholder: 'Briefly describe your needs...',
                apiSubmitNote: '<i class="fa-solid fa-info-circle mr-2"></i>Our team will contact you within <strong>1-2 business days</strong> with API key and documentation.',
                cancel: 'Cancel',
                submit: 'Submit',
                apiContact: 'Questions? Contact us: ',
                aboutModalTitle: 'About Us',
                aboutTagline: 'Redefining the future of oral health with AI',
                aboutVision: 'Our Vision',
                aboutVisionText: 'At ToothHelper, we believe technology can make professional oral diagnosis accessible. Through the DuYa Oral Foundation Model, we combine AI and deep learning to deliver accurate, fast, and convenient digital oral health solutions.',
                aboutTeam: 'Cross-disciplinary Team',
                aboutTeamIntro: 'Our team drives innovation, with experts from Columbia University, UNC, The University of Sydney, and The University of Hong Kong in AI, medical imaging, and clinical practice.',
                aboutAI4M: 'AI4M Team',
                aboutAI4MText: 'Focus on computer vision (CV) and large language models (LLM), developing the DuYa Oral Foundation Model for accurate oral disease recognition and analysis.',
                aboutClinical: 'Clinical Team',
                aboutClinicalText: 'Deep medical and clinical expertise, integrating clinical logic into algorithm development for clinical applicability.',
                aboutWhy: 'Why ToothHelper?',
                aboutCard1Title: 'Research-driven innovation',
                aboutCard1Text: 'Backed by leading research, our solutions are validated and iterated, at the forefront of the industry.',
                aboutCard2Title: 'Full-stack technology',
                aboutCard2Text: 'From algorithms to cloud deployment, we own the full technology stack.',
                aboutCard3Title: 'People-first design',
                aboutCard3Text: 'Committed to the most human-centered smart healthcare experience, in clinic or at home.',
                aboutContact: 'Contact Us',
                close: 'Close',
                detected: 'Detected',
                apiSuccessAlert: 'Application submitted!\nOur team will contact you within 1-2 business days.\n\nThank you for your interest!',
                viewReportAlert: 'Redirecting to full report',
                shareReportTitle: 'ToothHelper Oral Health Report',
                shareReportText: 'I just completed my smart oral health analysis. Check out my report!',
                shareFallbackAlert: 'Share: Copy link or generate poster',
                diseaseModalTitle: '10 Recognizable Oral Conditions',
                diseaseModalIntro: 'DuYa Oral Model has been trained to recognize the following common oral conditions',
                diseaseGotIt: 'Got it',
                d1Name: 'Caries', d1Desc: 'Bacterial disease of tooth hard tissue',
                d2Name: 'Residual crown', d2Desc: 'Remaining root with most crown lost',
                d3Name: 'Tooth wear', d3Desc: 'Physical wear of tooth surface',
                d4Name: 'Wedge defect', d4Desc: 'Hard tissue defect at tooth neck',
                d5Name: 'Gingival recession', d5Desc: 'Gums receding toward root',
                d6Name: 'Dental fluorosis', d6Desc: 'Tooth defect from excess fluoride',
                d7Name: 'Crowding', d7Desc: 'Teeth crowded due to lack of space',
                d8Name: 'Tooth color', d8Desc: 'Abnormal tooth discoloration',
                d9Name: 'Calculus', d9Desc: 'Calcified plaque deposit',
                d10Name: 'Gingivitis', d10Desc: 'Inflammation of gum tissue',
                tutorialTitle: 'Standard Shooting Guide',
                methodOther: 'Assisted (recommended)',
                methodSelf: 'Selfie',
                tutorialOtherTip: 'Have someone assist for clearer, steadier images.',
                shootUpper: 'Upper view', shootFront: 'Front view', shootDown: 'Lower view',
                otherUpperDesc: 'Tilt head back, mouth open; assistant shoots from below to capture upper teeth.',
                otherFrontDesc: 'Look ahead, teeth slightly apart; assistant shoots straight at teeth from front.',
                otherDownDesc: 'Chin down, mouth open, tongue up; assistant shoots from above for lower teeth.',
                tutorialPoints: 'Shooting tips',
                point1Title: 'Good lighting',
                point1Desc: 'Shoot in natural light or use flash. Keep gum edges clear without shadow.',
                point2Title: 'Focus',
                point2Desc: 'Tap to focus on teeth. Blurry images may cause AI analysis to fail.',
                point3Title: 'Full view',
                point3Desc: 'Open mouth wide for upper/lower shots; include last molars and keep steady.',
                tutorialSelfTip: '<i class="fa-solid fa-triangle-exclamation mr-2"></i>Keep the phone steady in selfie mode.',
                selfUpperDesc: 'Screen toward face, phone tilted up; tilt head back, mouth open, aim at upper teeth.',
                selfFrontDesc: 'Look at screen, teeth slightly apart; lens level and centered on teeth.',
                selfDownDesc: 'Screen toward face, phone tilted down; chin down, mouth open, tongue up, aim at lower teeth.',
                point2SelfTitle: 'Keep steady',
                point2SelfDesc: 'Hold phone steady to avoid blur.',
                point3SelfTitle: 'Distance',
                point3SelfDesc: 'Keep 20–30 cm distance so teeth are clear and not distorted.',
                point1SelfDesc: 'Ensure good lighting and avoid shadow or glare.'
            }
        };
        
        function t(key) { return (I18N[window.currentLang] || I18N.zh)[key] || key; }
        
        function setLang(lang) {
            if (lang !== 'zh' && lang !== 'en') return;
            window.currentLang = lang;
            localStorage.setItem('toothhelper-lang', lang);
            document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
            document.title = I18N[lang].title;
            
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const val = I18N[lang][key];
                if (val === undefined) return;
                if (el.getAttribute('data-i18n-html')) {
                    el.innerHTML = val;
                } else {
                    el.textContent = val;
                }
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (I18N[lang][key] != null) el.placeholder = I18N[lang][key];
            });
            document.querySelectorAll('option[data-i18n-option]').forEach(opt => {
                const key = opt.getAttribute('data-i18n-option');
                if (I18N[lang][key] != null) opt.textContent = I18N[lang][key];
            });
            
            document.querySelectorAll('.lang-zh-btn').forEach(btn => {
                btn.classList.toggle('bg-tech-cyan/20', lang === 'zh');
                btn.classList.toggle('text-deep-teal/60', lang !== 'zh');
            });
            document.querySelectorAll('.lang-en-btn').forEach(btn => {
                btn.classList.toggle('bg-tech-cyan/20', lang === 'en');
                btn.classList.toggle('text-deep-teal/60', lang !== 'en');
            });
        }
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() { setLang(window.currentLang); });
        } else {
            setLang(window.currentLang);
        }
        
        /* ==========================================
           全局变量和常量
           ========================================== */
        
        let userCount = 99888;
        const userCountElement = document.getElementById('user-count');
        const userCountMobileElement = document.getElementById('user-count-mobile');
        
        /* ==========================================
           用户统计功能
           ========================================== */
        
        /**
         * 更新用户数量显示
         * 每3-8秒随机增加1-3个用户，模拟实时用户增长
         */
        function updateUserCount() {
            const randomDelay = Math.random() * 5000 + 3000; // 3-8秒
            const randomIncrease = Math.floor(Math.random() * 3) + 1; // 1-3个用户
            
            setTimeout(() => {
                userCount += randomIncrease;
                if (userCountElement) {
                    userCountElement.textContent = userCount.toLocaleString();
                }
                if (userCountMobileElement) {
                    userCountMobileElement.textContent = userCount.toLocaleString();
                }
                updateUserCount(); // 继续下一次更新
            }, randomDelay);
        }
        
        // 页面加载后开始更新
        if (userCountElement || userCountMobileElement) {
            updateUserCount();
        }
        
        /* ==========================================
           气泡提示功能
           ========================================== */
        
        const bubbleTextElement = document.getElementById('bubble-text');
        
        /**
         * 口腔健康科普内容数组
         * 共100条健康提示，在气泡中循环显示
         */
        const dentalTips = [
            '每天刷牙2次<br/>每次2分钟',
            '使用牙线清洁<br/>牙缝更健康',
            '定期看牙医<br/>预防胜治疗',
            '少吃糖食物<br/>保护牙齿',
            '刷牙后别漱口<br/>氟化物更有效',
            '用软毛牙刷<br/>保护牙龈',
            '牙龈出血<br/>警惕牙周病',
            '牙刷每3个月<br/>更换一次',
            '吃酸性食物后<br/>半小时再刷牙',
            '睡前刷牙<br/>最为重要',
            '牙齿敏感<br/>警惕牙釉质磨损',
            '电动牙刷<br/>清洁更彻底',
            '清洁舌苔<br/>预防口臭',
            '喝碳酸饮料后<br/>记得漱口',
            '智齿发炎<br/>及时就医',
            '牙齿矫正<br/>成人也可以',
            '孕期要注意<br/>口腔卫生',
            '宝宝6个月大<br/>首次检查',
            '氟化物强化<br/>牙釉质',
            '磨牙症患者<br/>可戴护齿器',
            '口腔溃疡超2周<br/>及时就医',
            '吸烟增加<br/>口腔病风险',
            '美白前应先<br/>治疗牙病',
            '根管治疗<br/>可挽救龋齿',
            '牙周病是<br/>失牙主因',
            '无糖口香糖<br/>促唾液分泌',
            '唾液有<br/>抗菌修复功能',
            '牙齿不齐<br/>影响咀嚼发音',
            '洗牙不伤牙<br/>每年1-2次',
            '牙龈萎缩<br/>不可逆',
            '含氟牙膏<br/>各年龄适用',
            '牙齿外伤后<br/>立即就医',
            '乳牙龋齿<br/>也要治疗',
            '牙菌斑是<br/>主要致病因素',
            '正确刷牙法<br/>巴氏刷牙',
            '牙缝变大<br/>警惕牙周病',
            '种植牙<br/>接近天然牙',
            '牙齿发黄<br/>不一定是病',
            '四环素牙<br/>药物引起',
            '氟斑牙<br/>儿童期过量氟',
            '牙齿缺失<br/>及时修复',
            '夜间口干<br/>增加龋齿风险',
            '糖尿病患者<br/>易患牙周病',
            '维C缺乏<br/>致牙龈出血',
            '钙质不足<br/>影响牙齿',
            '咬硬物<br/>易致牙隐裂',
            '牙齿隐裂<br/>需定期检查',
            '牙髓炎疼痛<br/>需根管治疗',
            '牙周袋<br/>牙周病表现',
            '牙结石<br/>需专业洗牙',
            '换牙期注意<br/>恒牙萌出',
            '双排牙<br/>及时拔乳牙',
            '牙齿松动<br/>可能可治疗',
            '牙冠修复<br/>保护牙齿',
            '牙桥修复<br/>需磨邻牙',
            '活动假牙<br/>定期调整',
            '全口假牙<br/>需适应期',
            '隐形矫正<br/>美观需自律',
            '传统矫正<br/>力量精确',
            '矫正期间<br/>加强清洁',
            '矫正后<br/>佩戴保持器',
            '牙齿贴面<br/>改善外观',
            '瓷贴面<br/>更耐用美观',
            '冷光美白<br/>维持1-2年',
            '家用美白<br/>浓度更安全',
            '美白后24小时<br/>避免深色食物',
            '牙齿敏感<br/>用抗敏牙膏',
            '含酒精漱口水<br/>别长期用',
            '儿童牙膏<br/>含氟量要低',
            '3岁以下<br/>米粒大牙膏',
            '3-6岁<br/>豌豆大牙膏',
            '牙线比牙签<br/>更安全',
            '水牙线<br/>适合矫正人群',
            '牙间刷<br/>清洁大牙缝',
            '舌刮器<br/>去除舌苔',
            'pH低于5.5<br/>牙齿脱矿',
            '纤维食物<br/>清洁牙齿',
            '奶酪<br/>保护牙齿',
            '绿茶<br/>有益口腔',
            '木糖醇<br/>抑制致龋菌',
            '睡眠时<br/>细菌易繁殖',
            '口呼吸<br/>增加龋齿风险',
            '打鼾与<br/>口腔结构有关',
            '颞颌关节紊乱<br/>引起张口痛',
            '咬合不正<br/>致面部不对称',
            '牙齿咬合<br/>影响姿势',
            '口腔健康<br/>关联心血管',
            '牙周病菌<br/>影响全身',
            '孕前做<br/>口腔检查',
            '哺乳期治牙<br/>告知医生',
            '老年人易患<br/>根面龋',
            '唾液减少<br/>加速龋坏',
            '某些药物<br/>致牙龈增生',
            '化疗可能<br/>致黏膜炎',
            '放疗后<br/>注意口腔护理',
            '口腔癌症状<br/>易被忽视',
            '口腔白斑<br/>有癌变风险',
            '舌癌多发于<br/>舌侧缘',
            '定期自检<br/>早发现异常'
        ];
        
        const dentalTipsEn = [
            'Brush twice daily<br/>2 minutes each',
            'Floss daily<br/>healthier gums',
            'See your dentist<br/>prevention matters',
            'Less sugar<br/>protect teeth',
            'Don\'t rinse after brushing<br/>keep fluoride',
            'Use soft bristles<br/>protect gums',
            'Bleeding gums<br/>see a dentist',
            'Replace toothbrush<br/>every 3 months',
            'Wait 30 min after acidic food<br/>then brush',
            'Brush before bed<br/>most important',
            'Sensitive teeth<br/>check enamel',
            'Electric brush<br/>thorough clean',
            'Clean tongue<br/>fresher breath',
            'Rinse after soda<br/>protect enamel',
            'Wisdom tooth pain<br/>see a dentist',
            'Braces work<br/>for adults too',
            'Pregnancy<br/>oral care matters',
            'First dental visit<br/>at 6 months',
            'Fluoride strengthens<br/>enamel',
            'Teeth grinding<br/>wear a guard',
            'Mouth ulcer >2 weeks<br/>see a doctor',
            'Smoking increases<br/>oral disease risk',
            'Treat dental issues<br/>before whitening',
            'Root canal<br/>can save teeth',
            'Gum disease<br/>main cause of tooth loss',
            'Sugar-free gum<br/>helps saliva',
            'Saliva has<br/>antibacterial role',
            'Crooked teeth<br/>affect chewing',
            'Professional cleaning<br/>1–2 times a year',
            'Receding gums<br/>often irreversible'
        ];
        
        function getDentalTips() { return (window.currentLang === 'en' ? dentalTipsEn : dentalTips); }
        
        let currentTipIndex = -1;
        const bubbleTextMobileElement = document.getElementById('bubble-text-mobile');
        
        /**
         * 更新气泡文字内容
         * 随机选择一条口腔健康提示，带淡入淡出动画效果
         * 支持手动点击小人切换和自动循环播放
         */
        function updateBubbleText() {
            if (!bubbleTextElement && !bubbleTextMobileElement) return;
            
            // 淡出动画
            if (bubbleTextElement) bubbleTextElement.style.opacity = '0';
            if (bubbleTextMobileElement) bubbleTextMobileElement.style.opacity = '0';
            
setTimeout(() => {
                const tips = getDentalTips();
                // 如果是第一次（10秒后），开始显示科普内容
                if (currentTipIndex === -1) {
                    currentTipIndex = 0;
                } else {
                    // 随机选择一个不同的科普内容
                    let newIndex;
                    do {
                        newIndex = Math.floor(Math.random() * tips.length);
                    } while (newIndex === currentTipIndex && tips.length > 1);
                    currentTipIndex = newIndex;
                }
                
                // 更新内容
                if (bubbleTextElement) bubbleTextElement.innerHTML = tips[currentTipIndex];
                if (bubbleTextMobileElement) bubbleTextMobileElement.innerHTML = tips[currentTipIndex];
                
                // 使用requestAnimationFrame确保平滑过渡
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        if (bubbleTextElement) bubbleTextElement.style.opacity = '1';
                        if (bubbleTextMobileElement) bubbleTextMobileElement.style.opacity = '1';
                    });
                });
            }, 700); // 与CSS的duration-700匹配
        }
        
        // 10秒后开始循环播放科普内容
        if (bubbleTextElement) {
            setTimeout(() => {
                updateBubbleText();
                // 之后每10秒切换一次
                setInterval(updateBubbleText, 10000);
            }, 10000);
        }
        
        /* ==========================================
           照片上传功能
           ========================================== */
        
        let uploadedCount = 0;

        /**
         * 处理照片上传
         * @param {HTMLInputElement} input - 文件输入元素
         * @param {string} imgId - 预览图片元素的ID
         */
        function handleFile(input, imgId) {
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.getElementById(imgId);
                    img.src = e.target.result;
                    img.classList.remove('hidden');
                    input.parentElement.querySelector('.preview-placeholder').classList.add('opacity-0');
                    // 隐藏白色蒙版层
                    const whiteOverlay = input.parentElement.querySelector('.white-overlay');
                    if (whiteOverlay) {
                        whiteOverlay.classList.add('hidden');
                    }
                    // 移除upload-card的白色背景
                    const uploadCard = input.parentElement.querySelector('.upload-card');
                    if (uploadCard) {
                        uploadCard.style.background = 'transparent';
                        uploadCard.classList.add('!border-tech-cyan', 'shadow-glow');
                    }
                    // 显示"点击重拍"按钮
                    const retakeBtn = input.parentElement.querySelector('.retake-btn');
                    if (retakeBtn) {
                        retakeBtn.classList.remove('hidden');
                    }
                    // 显示图注
                    const container = input.parentElement.parentElement;
                    const photoLabel = container.querySelector('.photo-label');
                    if (photoLabel) {
                        photoLabel.classList.remove('hidden');
                    }
                    uploadedCount++;
                    checkReady();
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        /**
         * 重新拍摄照片
         * @param {string} inputId - 文件输入元素ID
         * @param {string} imgId - 预览图片元素ID
         */
        function retakePhoto(inputId, imgId) {
            const input = document.getElementById(inputId);
            const img = document.getElementById(imgId);
            const container = input.parentElement.parentElement;
            
            // 清除照片并恢复初始状态
            img.src = '';
            img.classList.add('hidden');
            
            // 显示占位符
            const placeholder = input.parentElement.querySelector('.preview-placeholder');
            if (placeholder) {
                placeholder.classList.remove('opacity-0');
            }
            
            // 显示白色蒙版层
            const whiteOverlay = input.parentElement.querySelector('.white-overlay');
            if (whiteOverlay) {
                whiteOverlay.classList.remove('hidden');
            }
            
            // 恢复upload-card背景
            const uploadCard = input.parentElement.querySelector('.upload-card');
            if (uploadCard) {
                uploadCard.style.background = '';
                uploadCard.classList.remove('!border-tech-cyan', 'shadow-glow');
            }
            
            // 隐藏"点击重拍"按钮
            const retakeBtn = input.parentElement.querySelector('.retake-btn');
            if (retakeBtn) {
                retakeBtn.classList.add('hidden');
            }
            
            // 隐藏图注
            const photoLabel = container.querySelector('.photo-label');
            if (photoLabel) {
                photoLabel.classList.add('hidden');
            }
            
            // 清除input值
            input.value = '';
            
            // 减少上传计数
            uploadedCount--;
            checkReady();
        }

        /**
         * 检查是否可以开始分析
         * 需要满足：上传3张照片 + 勾选同意协议
         */
        function checkReady() {
            const btn = document.getElementById('analyze-btn');
            const checkbox = document.getElementById('agreement-checkbox');
            const isAgreed = checkbox ? checkbox.checked : false;
            
            if(uploadedCount >= 3 && isAgreed) {
                btn.disabled = false;
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
                btn.classList.add('opacity-100');
            } else {
                btn.disabled = true;
                btn.classList.add('opacity-50', 'cursor-not-allowed');
                btn.classList.remove('opacity-100');
            }
        }

        function checkAgreement() {
            checkReady();
        }

        // 10种疾病列表
        const diseases = [
            '龋齿', '残冠', '牙磨损', '楔状缺损', '牙龈退缩',
            '氟牙症', '牙列拥挤', '牙齿颜色', '牙结石', '牙龈炎'
        ];
        const diseasesEn = [
            'Caries', 'Residual crown', 'Tooth wear', 'Wedge defect', 'Gingival recession',
            'Dental fluorosis', 'Crowding', 'Tooth color', 'Calculus', 'Gingivitis'
        ];
        function getDiseases() { return (window.currentLang === 'en' ? diseasesEn : diseases); }

        /* ==========================================
           智能分析功能
           ========================================== */
        
        /**
         * 开始智能分析
         * 模拟AI检测过程，逐个显示检测项目和结果
         * 完成后显示已上传照片和操作按钮
         */
        function startAnalysis() {
            const btn = document.getElementById('analyze-btn');
            const diagnosisPanel = document.getElementById('diagnosis-panel');
            const diagnosisList = document.getElementById('diagnosis-list');
            const disclaimerBefore = document.getElementById('disclaimer-before');
            const disclaimerAfter = document.getElementById('disclaimer-after');
            
            // 禁用按钮
            btn.disabled = true;
            btn.classList.remove('opacity-100');
            btn.innerHTML = `<span class="relative z-10 flex items-center justify-center gap-3 text-deep-teal"><i class="fa-solid fa-circle-notch fa-spin text-deep-teal"></i> ${t('analyzing')}</span>`;
            
            // 隐藏检测前的免责声明，显示诊断面板
            disclaimerBefore.classList.add('hidden');
            diagnosisPanel.classList.remove('hidden');
            disclaimerAfter.classList.remove('hidden');
            diagnosisList.innerHTML = '';
            
            // 创建单个固定的检测项
            const item = document.createElement('div');
            item.className = 'flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-tech-cyan/10 transition-all duration-300';
            diagnosisList.appendChild(item);
            
            // 逐个检测疾病（在同一行滚动显示）
            let currentIndex = 0;
            
            function detectDisease() {
                if (currentIndex >= getDiseases().length) {
                    // 所有检测完成
                    setTimeout(() => {
                        const panelTitle = diagnosisPanel.querySelector('h3');
                        panelTitle.innerHTML = `
                            <i class="fa-solid fa-circle-check text-green-500"></i>
                        ${t('analysisDone')}
                        `;
                        btn.innerHTML = `<span class="relative z-10 flex items-center justify-center gap-3 text-deep-teal"><i class="fa-solid fa-circle-check"></i>${t('analysisDone')}</span>`;
                        
                        // 移除检测项
                        item.remove();
                        
                        // 添加已上传的照片显示
                        const photosSection = document.createElement('div');
                        photosSection.className = 'mb-4 pb-4 border-b border-tech-cyan/10';
                        
                        const upperImg = document.getElementById('preview-upper').src;
                        const frontImg = document.getElementById('preview-front').src;
                        const lowerImg = document.getElementById('preview-lower').src;
                        
                        photosSection.innerHTML = `
                            <h4 class="text-sm font-bold text-deep-teal mb-3 flex items-center gap-2">
                                <i class="fa-solid fa-images text-tech-cyan-dark"></i>
                                ${t('detectResult')}
                            </h4>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 -mx-4 md:mx-0">
                                <div class="cursor-pointer" onclick="showImageModal('${upperImg}', '${t('upperView')}')">
                                    <div class="relative group overflow-hidden rounded-xl">
                                        <img src="${upperImg}" class="w-full aspect-video object-cover border border-tech-cyan/20 transition-all group-hover:border-tech-cyan group-hover:shadow-lg" alt="${t('upperView')}">
                                        <div class="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded text-white text-xs flex items-center gap-1">
                                            <i class="fa-solid fa-expand text-[10px]"></i>
                                            <span>${t('zoomIn')}</span>
                                        </div>
                                        <div class="absolute inset-0 bg-deep-teal/0 group-hover:bg-deep-teal/10 transition-all flex items-center justify-center">
                                            <i class="fa-solid fa-expand text-white text-2xl opacity-0 group-hover:opacity-100 transition-all"></i>
                                        </div>
                                    </div>
                                    <p class="text-xs text-deep-teal/70 text-center mt-2">${t('upperView')}</p>
                                </div>
                                <div class="cursor-pointer" onclick="showImageModal('${frontImg}', '${t('frontView')}')">
                                    <div class="relative group overflow-hidden rounded-xl">
                                        <img src="${frontImg}" class="w-full aspect-video object-cover border border-tech-cyan/20 transition-all group-hover:border-tech-cyan group-hover:shadow-lg" alt="${t('frontView')}">
                                        <div class="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded text-white text-xs flex items-center gap-1">
                                            <i class="fa-solid fa-expand text-[10px]"></i>
                                            <span>${t('zoomIn')}</span>
                                        </div>
                                        <div class="absolute inset-0 bg-deep-teal/0 group-hover:bg-deep-teal/10 transition-all flex items-center justify-center">
                                            <i class="fa-solid fa-expand text-white text-2xl opacity-0 group-hover:opacity-100 transition-all"></i>
                                        </div>
                                    </div>
                                    <p class="text-xs text-deep-teal/70 text-center mt-2">${t('frontView')}</p>
                                </div>
                                <div class="cursor-pointer" onclick="showImageModal('${lowerImg}', '${t('lowerView')}')">
                                    <div class="relative group overflow-hidden rounded-xl">
                                        <img src="${lowerImg}" class="w-full aspect-video object-cover border border-tech-cyan/20 transition-all group-hover:border-tech-cyan group-hover:shadow-lg" alt="${t('lowerView')}">
                                        <div class="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded text-white text-xs flex items-center gap-1">
                                            <i class="fa-solid fa-expand text-[10px]"></i>
                                            <span>${t('zoomIn')}</span>
                                        </div>
                                        <div class="absolute inset-0 bg-deep-teal/0 group-hover:bg-deep-teal/10 transition-all flex items-center justify-center">
                                            <i class="fa-solid fa-expand text-white text-2xl opacity-0 group-hover:opacity-100 transition-all"></i>
                                        </div>
                                    </div>
                                    <p class="text-xs text-deep-teal/70 text-center mt-2">${t('lowerView')}</p>
                                </div>
                            </div>
                        `;
                        diagnosisList.appendChild(photosSection);
                        
                        // 添加查看报告按钮
                        const reportBtn = document.createElement('div');
                        reportBtn.id = 'report-buttons';
                        reportBtn.className = 'w-full mt-2 pt-2 border-t border-tech-cyan/10 flex flex-nowrap gap-2 md:gap-3';
                        reportBtn.innerHTML = `
                            <button onclick="showSurvey()" class="relative group overflow-hidden w-full px-3 md:px-6 py-3 bg-tech-gradient text-deep-teal font-heading font-bold text-xs md:text-base rounded-xl shadow-lg shadow-tech-cyan/20 transition-all hover:scale-[1.02] hover:shadow-tech-cyan/40">
                                <span class="relative z-10 flex items-center justify-center gap-1.5 md:gap-2 whitespace-nowrap">
                                    <span>${t('viewReport')}</span> <i class="fa-solid fa-file-medical text-xs md:text-sm"></i>
                                </span>
                                <div class="absolute inset-0 bg-white/40 -translate-x-full group-hover:animate-scan-sweep z-0"></div>
                            </button>
                        `;
                        diagnosisList.appendChild(reportBtn);
                    }, 500);
                    return;
                }
                
                const diseaseList = getDiseases();
                const disease = diseaseList[currentIndex];
                
                // 显示正在检测
                item.className = 'flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-tech-cyan/10 transition-all duration-300';
                item.innerHTML = `
                    <span class="text-sm font-medium text-deep-teal">${t('detecting')} <span class="font-bold">${disease}</span></span>
                    <i class="fa-solid fa-circle-notch fa-spin text-tech-cyan-dark"></i>
                `;
                
                // 检测完成
                setTimeout(() => {
                    item.className = 'flex items-center justify-between bg-green-50/50 rounded-lg px-4 py-3 border border-green-200/50 transition-all duration-300';
                    item.innerHTML = `
                        <span class="text-sm font-medium text-deep-teal">${t('detected')} <span class="font-bold">${disease}</span></span>
                        <i class="fa-solid fa-circle-check text-green-500"></i>
                    `;
                    
                    // 短暂停留后检测下一个
                    setTimeout(() => {
                        currentIndex++;
                        detectDisease();
                    }, 400);
                }, 800 + Math.random() * 400); // 每个疾病检测时间0.8-1.2秒
            }
            
            // 开始检测
            detectDisease();
        }

        /* ==========================================
           API申请功能
           ========================================== */
        
        /**
         * 提交API申请表单
         * @param {Event} event - 表单提交事件
         */
        function submitAPIRequest(event) {
            event.preventDefault();
            
            const phone = document.getElementById('api-phone').value;
            const scenario = document.getElementById('api-scenario').value;
            const notes = document.getElementById('api-notes').value;
            
            // 这里可以添加实际的API提交逻辑
            console.log('API申请信息：', { phone, scenario, notes });
            
            // 显示成功提示
            alert(t('apiSuccessAlert'));
            
            // 关闭模态框并重置表单
            toggleModal('api-modal');
            document.getElementById('api-phone').value = '';
            document.getElementById('api-scenario').value = '';
            document.getElementById('api-notes').value = '';
        }

        function switchShootingMethod(method) {
            const otherBtn = document.getElementById('method-other');
            const selfBtn = document.getElementById('method-self');
            const otherContent = document.getElementById('other-method');
            const selfContent = document.getElementById('self-method');

            if (method === 'other') {
                // 切换到他人帮拍
                otherBtn.className = 'px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all bg-tech-gradient text-deep-teal shadow-sm whitespace-nowrap flex items-center';
                selfBtn.className = 'px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all text-deep-teal/60 hover:text-deep-teal whitespace-nowrap flex items-center';
                otherContent.classList.remove('hidden');
                selfContent.classList.add('hidden');
            } else {
                // 切换到前置自拍
                selfBtn.className = 'px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all bg-tech-gradient text-deep-teal shadow-sm whitespace-nowrap flex items-center';
                otherBtn.className = 'px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all text-deep-teal/60 hover:text-deep-teal whitespace-nowrap flex items-center';
                selfContent.classList.remove('hidden');
                otherContent.classList.add('hidden');
            }
        }

        /* ==========================================
           模态框功能
           ========================================== */
        
        /**
         * 切换模态框显示状态
         * @param {string} modalId - 模态框元素ID
         */
        function toggleModal(modalId) {
            const modal = document.getElementById(modalId);
            let content;
            
            if (modalId === 'tutorial-modal') {
                content = modal.querySelector('#tutorial-content');
            } else if (modalId === 'disease-modal') {
                content = modal.querySelector('#disease-content');
            } else if (modalId === 'api-modal') {
                content = modal.querySelector('#api-content');
            } else if (modalId === 'about-modal') {
                content = modal.querySelector('#about-content');
            } else {
                content = modal.querySelector('#info-content');
            }
            
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                void modal.offsetWidth; 
                modal.classList.remove('opacity-0');
                
                content.classList.remove('scale-95', 'opacity-0');
                content.classList.add('scale-100', 'opacity-100');
            } else {
                modal.classList.add('opacity-0');
                content.classList.remove('scale-100', 'opacity-100');
                content.classList.add('scale-95', 'opacity-0');
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 300);
            }
        }

        /**
         * 显示图片放大模态框
         * @param {string} imageSrc - 图片源地址
         * @param {string} imageTitle - 图片标题
         */
        function showImageModal(imageSrc, imageTitle) {
            const modal = document.getElementById('image-modal');
            const img = document.getElementById('image-modal-img');
            const title = document.getElementById('image-modal-title');
            
            img.src = imageSrc;
            title.textContent = imageTitle;
            modal.classList.remove('hidden');
        }

        function closeImageModal() {
            const modal = document.getElementById('image-modal');
            modal.classList.add('hidden');
        }

        // 问卷题库
        const surveyQuestions = {
            A: [
                {
                    id: 'Q1',
                    question: '您觉得刚才的智能口腔分析体验怎么样？',
                    type: 'scale',
                    min: 1,
                    max: 5,
                    minLabel: '完全没用',
                    maxLabel: '非常有用'
                },
                {
                    id: 'Q3',
                    question: '您对这种「用照片 + AI 做口腔健康分析」的方式接受程度如何？',
                    type: 'scale',
                    min: 1,
                    max: 5,
                    minLabel: '完全不接受',
                    maxLabel: '非常接受'
                },
                {
                    id: 'Q5',
                    question: '如果这类服务需要付费（或需要购买设备），您使用/购买的可能性有多大？',
                    type: 'scale',
                    min: 1,
                    max: 5,
                    minLabel: '完全不可能',
                    maxLabel: '非常可能'
                }
            ],
            B: [
                {
                    id: 'Q2',
                    question: '刚才的体验对您了解口腔健康状况有帮助吗？',
                    type: 'scale',
                    min: 1,
                    max: 5,
                    minLabel: '完全没帮助',
                    maxLabel: '非常有帮助'
                },
                {
                    id: 'Q4',
                    question: '您对「用照片 + AI 分析口腔健康」这种方式的接受程度？',
                    type: 'scale',
                    min: 1,
                    max: 5,
                    minLabel: '完全不接受',
                    maxLabel: '非常接受'
                },
                {
                    id: 'Q6',
                    question: '您有多大可能把刚才这种「智能口腔分析」推荐给亲友？',
                    type: 'scale',
                    min: 1,
                    max: 5,
                    minLabel: '完全不可能',
                    maxLabel: '非常可能'
                }
            ],
            C: [
                {
                    id: 'Q1',
                    question: '您觉得刚才的智能口腔分析体验怎么样？',
                    type: 'scale',
                    min: 1,
                    max: 5,
                    minLabel: '完全没用',
                    maxLabel: '非常有用'
                },
                {
                    id: 'Q3',
                    question: '您对这种「用照片 + AI 做口腔健康分析」的方式接受程度如何？',
                    type: 'scale',
                    min: 1,
                    max: 5,
                    minLabel: '完全不接受',
                    maxLabel: '非常接受'
                },
                {
                    id: 'Q7',
                    question: '以后您会自己或带家人再来使用这种智能口腔分析吗？',
                    type: 'scale',
                    min: 1,
                    max: 5,
                    minLabel: '不会',
                    maxLabel: '会经常用'
                }
            ],
            D: [
                {
                    id: 'Q2',
                    question: '刚才的体验对您了解口腔健康状况有帮助吗？',
                    type: 'scale',
                    min: 1,
                    max: 5,
                    minLabel: '完全没帮助',
                    maxLabel: '非常有帮助'
                },
                {
                    id: 'Q8',
                    question: '您对智能分析结果的信任程度如何？（在未看报告前，基于当前体验）',
                    type: 'scale',
                    min: 1,
                    max: 5,
                    minLabel: '完全不信',
                    maxLabel: '完全信任'
                },
                {
                    id: 'Q6',
                    question: '您有多大可能把刚才这种「智能口腔分析」推荐给亲友？',
                    type: 'scale',
                    min: 1,
                    max: 5,
                    minLabel: '完全不可能',
                    maxLabel: '非常可能'
                }
            ],
            E: [
                {
                    id: 'Q1',
                    question: '您觉得刚才的智能口腔分析体验怎么样？',
                    type: 'scale',
                    min: 1,
                    max: 5,
                    minLabel: '完全没用',
                    maxLabel: '非常有用'
                },
                {
                    id: 'Q9',
                    question: '您有多大意愿在日常生活中使用这种智能口腔分析？',
                    type: 'scale',
                    min: 1,
                    max: 5,
                    minLabel: '完全没意愿',
                    maxLabel: '非常有意愿'
                },
                {
                    id: 'Q5',
                    question: '如果这类服务需要付费（或需要购买设备），您使用/购买的可能性有多大？',
                    type: 'scale',
                    min: 1,
                    max: 5,
                    minLabel: '完全不可能',
                    maxLabel: '非常可能'
                }
            ]
        };

        const surveyQuestionsEn = {
            A: [
                { id: 'Q1', question: 'How was your smart oral analysis experience?', type: 'scale', min: 1, max: 5, minLabel: 'Not useful', maxLabel: 'Very useful' },
                { id: 'Q3', question: 'How do you feel about "photo + AI" for oral health analysis?', type: 'scale', min: 1, max: 5, minLabel: 'Not at all', maxLabel: 'Very much' },
                { id: 'Q5', question: 'If this service required payment (or device purchase), how likely would you use/buy?', type: 'scale', min: 1, max: 5, minLabel: 'Not likely', maxLabel: 'Very likely' }
            ],
            B: [
                { id: 'Q2', question: 'Did this experience help you understand your oral health?', type: 'scale', min: 1, max: 5, minLabel: 'Not at all', maxLabel: 'Very much' },
                { id: 'Q4', question: 'How do you feel about "photo + AI" for oral health analysis?', type: 'scale', min: 1, max: 5, minLabel: 'Not at all', maxLabel: 'Very much' },
                { id: 'Q6', question: 'How likely would you recommend this smart oral analysis to others?', type: 'scale', min: 1, max: 5, minLabel: 'Not likely', maxLabel: 'Very likely' }
            ],
            C: [
                { id: 'Q1', question: 'How was your smart oral analysis experience?', type: 'scale', min: 1, max: 5, minLabel: 'Not useful', maxLabel: 'Very useful' },
                { id: 'Q3', question: 'How do you feel about "photo + AI" for oral health analysis?', type: 'scale', min: 1, max: 5, minLabel: 'Not at all', maxLabel: 'Very much' },
                { id: 'Q7', question: 'Would you use this smart oral analysis again (or with family)?', type: 'scale', min: 1, max: 5, minLabel: 'No', maxLabel: 'Often' }
            ],
            D: [
                { id: 'Q2', question: 'Did this experience help you understand your oral health?', type: 'scale', min: 1, max: 5, minLabel: 'Not at all', maxLabel: 'Very much' },
                { id: 'Q8', question: 'How much do you trust the analysis results? (before viewing report)', type: 'scale', min: 1, max: 5, minLabel: 'Not at all', maxLabel: 'Fully' },
                { id: 'Q6', question: 'How likely would you recommend this smart oral analysis to others?', type: 'scale', min: 1, max: 5, minLabel: 'Not likely', maxLabel: 'Very likely' }
            ],
            E: [
                { id: 'Q1', question: 'How was your smart oral analysis experience?', type: 'scale', min: 1, max: 5, minLabel: 'Not useful', maxLabel: 'Very useful' },
                { id: 'Q9', question: 'How willing are you to use this smart oral analysis in daily life?', type: 'scale', min: 1, max: 5, minLabel: 'Not willing', maxLabel: 'Very willing' },
                { id: 'Q5', question: 'If this service required payment (or device purchase), how likely would you use/buy?', type: 'scale', min: 1, max: 5, minLabel: 'Not likely', maxLabel: 'Very likely' }
            ]
        };

        function getSurveyQuestions() { return (window.currentLang === 'en' ? surveyQuestionsEn : surveyQuestions); }

        let selectedCombo = null;
        let surveyAnswers = {};

        /* ==========================================
           问卷调查功能
           ========================================== */
        
        /**
         * 显示问卷调查
         * 从A-E组中随机选择一组问题（每组3个问题）
         * 动态生成问卷表单并显示模态框
         */
        function showSurvey() {
            // 随机选择A-E中的一组
            const combos = ['A', 'B', 'C', 'D', 'E'];
            selectedCombo = combos[Math.floor(Math.random() * combos.length)];
            
            const questions = getSurveyQuestions()[selectedCombo];
            const form = document.getElementById('survey-form');
            
            // 生成问题HTML
            form.innerHTML = questions.map((q, index) => {
                if (q.type === 'single') {
                    return `
                        <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm">
                            <div class="flex items-start gap-2 mb-3">
                                <span class="flex-shrink-0 w-6 h-6 rounded-full bg-tech-cyan/20 flex items-center justify-center text-xs font-bold text-tech-cyan-dark">${index + 1}</span>
                                <h3 class="text-sm md:text-base font-bold text-deep-teal leading-snug">${q.question}</h3>
                            </div>
                            <div class="space-y-2">
                                ${q.options.map((option, i) => `
                                    <label class="flex items-center p-2.5 md:p-3 bg-white rounded-lg cursor-pointer hover:bg-tech-cyan/5 transition-all border border-gray-200 hover:border-tech-cyan hover:shadow-sm group">
                                        <input type="radio" name="${q.id}" value="${i + 1}" class="w-4 h-4 text-tech-cyan-dark flex-shrink-0" required>
                                        <span class="ml-2.5 text-xs md:text-sm text-deep-teal group-hover:text-tech-cyan-dark transition-colors">${option}</span>
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                    `;
                } else if (q.type === 'scale') {
                    return `
                        <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm">
                            <div class="flex items-start gap-2 mb-3">
                                <span class="flex-shrink-0 w-6 h-6 rounded-full bg-tech-cyan/20 flex items-center justify-center text-xs font-bold text-tech-cyan-dark">${index + 1}</span>
                                <h3 class="text-sm md:text-base font-bold text-deep-teal leading-snug">${q.question}</h3>
                            </div>
                            <div class="flex items-center justify-between mb-2 px-1">
                                <span class="text-[10px] md:text-xs text-deep-teal/60 max-w-[40%] text-left">${q.minLabel}</span>
                                <span class="text-[10px] md:text-xs text-deep-teal/60 max-w-[40%] text-right">${q.maxLabel}</span>
                            </div>
                            <div class="flex justify-center gap-2 md:gap-3">
                                ${Array.from({length: q.max - q.min + 1}, (_, i) => i + q.min).map(val => `
                                    <label class="cursor-pointer group">
                                        <input type="radio" name="${q.id}" value="${val}" class="peer hidden" required>
                                        <div class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-full border-2 border-gray-200 peer-checked:border-tech-cyan peer-checked:bg-tech-cyan/10 peer-checked:shadow-md hover:border-tech-cyan/50 hover:scale-110 transition-all">
                                            <span class="text-sm md:text-base font-bold text-deep-teal peer-checked:text-tech-cyan-dark">${val}</span>
                                        </div>
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }
            }).join('');

            // 显示模态框
            const modal = document.getElementById('survey-modal');
            const content = document.getElementById('survey-content');
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modal.classList.add('opacity-100');
                content.classList.remove('scale-95', 'opacity-0');
                content.classList.add('scale-100', 'opacity-100');
            }, 10);
        }

        /**
         * 关闭问卷模态框
         * 带淡出动画效果
         */
        function closeSurvey() {
            const modal = document.getElementById('survey-modal');
            const content = document.getElementById('survey-content');
            modal.classList.remove('opacity-100');
            modal.classList.add('opacity-0');
            content.classList.remove('scale-100', 'opacity-100');
            content.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        /**
         * 提交问卷调查
         * 收集用户答案，更新按钮显示，并跳转到报告页面
         */
        function submitSurvey() {
            const form = document.getElementById('survey-form');
            
            // 验证表单完整性
            if (!form.checkValidity()) {
                alert('请回答所有问题');
                return;
            }

            // 收集答案
            const formData = new FormData(form);
            surveyAnswers = {
                combo: selectedCombo,
                answers: {}
            };
            
            for (let [key, value] of formData.entries()) {
                surveyAnswers.answers[key] = value;
            }

            console.log('问卷结果:', surveyAnswers);

            // 关闭模态框
            closeSurvey();

            // 添加分享按钮
            const reportBtnContainer = document.getElementById('report-buttons');
            reportBtnContainer.innerHTML = `
                <button onclick="viewReport()" class="relative group overflow-hidden px-3 md:px-6 py-3 bg-tech-gradient text-deep-teal font-heading font-bold text-xs md:text-base rounded-xl shadow-lg shadow-tech-cyan/20 transition-all hover:scale-[1.02] hover:shadow-tech-cyan/40 flex-shrink-0" style="flex: 2;">
                    <span class="relative z-10 flex items-center justify-center gap-1.5 md:gap-2 whitespace-nowrap">
                        <span>${t('viewReport')}</span> <i class="fa-solid fa-file-medical text-xs md:text-sm"></i>
                    </span>
                    <div class="absolute inset-0 bg-white/40 -translate-x-full group-hover:animate-scan-sweep z-0"></div>
                </button>
                <button onclick="shareReport()" class="relative group overflow-hidden px-3 md:px-6 py-3 bg-white text-deep-teal font-heading font-bold text-xs md:text-base rounded-xl border-2 border-tech-cyan/30 transition-all hover:scale-[1.02] hover:border-tech-cyan/50 hover:bg-tech-cyan/5 flex-shrink-0" style="flex: 0.85;">
                    <span class="relative z-10 flex items-center justify-center gap-1.5 md:gap-2 whitespace-nowrap">
                        <span>${t('shareReport')}</span> <i class="fa-solid fa-share-nodes text-xs md:text-sm"></i>
                    </span>
                </button>
            `;

            // 跳转到报告
            setTimeout(() => {
                viewReport();
            }, 500);
        }

        /* ==========================================
           报告操作功能
           ========================================== */
        
        /**
         * 查看专业版报告
         * 跳转到详细报告页面
         */
        function viewReport() {
            alert(t('viewReportAlert'));
            // window.location.href = '报告链接';
        }

        /**
         * 分享报告
         * 使用Web Share API或降级到复制链接
         */
        function shareReport() {
            if (navigator.share) {
                navigator.share({
                    title: t('shareReportTitle'),
                    text: t('shareReportText'),
                    url: window.location.href
                }).catch(err => console.log('分享失败', err));
            } else {
                alert(t('shareFallbackAlert'));
            }
